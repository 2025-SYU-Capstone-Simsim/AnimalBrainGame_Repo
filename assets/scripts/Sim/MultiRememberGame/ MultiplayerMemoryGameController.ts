import GameController from "./MultiPlayerRememberGame";
import OpponentMemoryViewer from "./MultiGuestViewerRemember"
import GameState from "../../Controller/CommonUI/GameState";
import MultiGameFlowController from "../../Controller/Multi/MultiFlowController";

const { ccclass, property } = cc._decorator;

declare global {
    interface Window {
        socket: any;
    }
}

@ccclass
export default class MultiplayerMemoryGameController extends cc.Component {
    @property(cc.Node) myGameArea: cc.Node = null;
    @property(cc.Node) opponentGameArea: cc.Node = null;
    @property(cc.Node) exitButton: cc.Node = null;

    @property(cc.Label) myNameLabel: cc.Label = null;
    @property(cc.Node) myCharacterNode: cc.Node = null;

    @property(cc.Label) guestNameLabel: cc.Label = null;
    @property(cc.Node) guestCharacterNode: cc.Node = null;

    private myGameCtrl: GameController = null;
    private opponentView: OpponentMemoryViewer = null;

    private _alreadyStarted = false;

    start() {
        if (this._alreadyStarted) return;
        this._alreadyStarted = true;

        // (1) 반드시 가장 먼저 소켓 이벤트 리스너 연결!
        MultiGameFlowController.initializeSocketListeners();

        // (2) GameState 복구
        const savedSequence = cc.sys.localStorage.getItem("selectedGameSequence");
        const savedIndex = cc.sys.localStorage.getItem("currentGameIndex");
        if (savedSequence) {
            try {
                GameState.selectedGameSequence = JSON.parse(savedSequence);
                GameState.currentGameIndex = Number(savedIndex) || 0;
            } catch (e) {
                cc.warn("[MMemGC] selectedGameSequence 복구 실패:", e);
            }
        }
        const savedHost = cc.sys.localStorage.getItem("isHost");
        GameState.isHost = savedHost === "true";

        // (3) myGameArea / opponentGameArea 컴포넌트 연결
        this.myGameCtrl = this.myGameArea
            ? this.myGameArea.getComponent(GameController)
            : null;
        if (!this.myGameArea) {
            cc.error("[MMemGC] 에러: myGameArea 프로퍼티가 반드시 Inspector에서 연결되어야 합니다.");
        }
        if (!this.myGameCtrl) {
            cc.error("[MMemGC] 에러: myGameArea 노드에 GameController 컴포넌트가 붙어 있는지 확인하세요.");
        }

        this.opponentView = this.opponentGameArea
            ? this.opponentGameArea.getComponent(OpponentMemoryViewer)
            : null;
        if (!this.opponentGameArea) {
            cc.error("[MMemGC] 에러: opponentGameArea 프로퍼티가 반드시 Inspector에서 연결되어야 합니다.");
        }
        if (!this.opponentView) {
            cc.error("[MMemGC] 에러: opponentGameArea 노드에 OpponentMemoryViewer 컴포넌트가 붙어 있는지 확인하세요.");
        }

        // (4) 화면에 닉네임·캐릭터 세팅
        this.setPlayerInfoFromGameState();

        // (5) 상대방 이벤트 바인딩
        cc.director.on(
            "sequence-generated",
            (data: { level: number; sequence: string[] }) => {
                if (this.opponentView) {
                    this.opponentView["showBlinkSequence"](data.sequence);
                }
            }
        );

        cc.director.on(
            "user-input",
            (data: { color: string; inputIndex: number }) => {
                if (this.opponentView) {
                    this.opponentView["showClickFeedback"](data.color);
                }
            }
        );

        cc.director.on(
            "input-result",
            (data: { correct: boolean; level: number; player: string }) => {
                if (this.opponentView) {
                    this.opponentView["updateFrogState"](data.correct ? "smile" : "cry");
                }
            }
        );

        cc.director.on(
            "score-update",
            (data: { player: "host" | "guest"; score: number }) => {
                const isHost = GameState.isHost;
                if (isHost && data.player === "guest") {
                    this.opponentView?.setScore(data.score);
                } else if (!isHost && data.player === "host") {
                    this.opponentView?.setScore(data.score);
                }
            }
        );

        // (6) 내 게임 시작 리스너 등록 (flowController가 multi-game-start emit 시 동작)
        cc.director.on("multi-game-start", () => {
            if (this.myGameCtrl) {
                this.myGameCtrl["beginGame"]();
            } else {
                cc.error("[MMemGC] myGameCtrl이 null이라 beginGame을 호출할 수 없습니다.");
            }
        });

        // (7) 종료 버튼 연결
        if (this.exitButton) {
            this.exitButton.on(cc.Node.EventType.TOUCH_END, this.loadMain, this);
        }
    }

    setPlayerInfoFromGameState() {
        const isHost = GameState.isHost;
        const myName = GameState.nickname || "나";
        const myChar = GameState.character || "dog";
        const guestName = GameState.guestNickname || "게스트";
        const guestChar = GameState.guestCharacter || "rabbit";
        const hostName = GameState.hostNickname || "호스트";
        const hostChar = GameState.hostCharacter || "tiger";

        if (isHost) {
            if (this.myNameLabel) this.myNameLabel.string = myName;
            if (this.guestNameLabel) this.guestNameLabel.string = guestName;
            this.setCharacterSprite(this.myCharacterNode, myChar);
            this.setCharacterSprite(this.guestCharacterNode, guestChar);
        } else {
            if (this.myNameLabel) this.myNameLabel.string = myName;
            if (this.guestNameLabel) this.guestNameLabel.string = hostName;
            this.setCharacterSprite(this.myCharacterNode, myChar);
            this.setCharacterSprite(this.guestCharacterNode, hostChar);
        }
    }

    setCharacterSprite(node: cc.Node, characterKey: string) {
        const sprite = node.getComponent(cc.Sprite);
        if (!sprite) return;
        const path = `Images/Common/characters/${characterKey}Head`;
        cc.resources.load(path, cc.SpriteFrame, (err, spriteFrame) => {
            if (!err && spriteFrame) sprite.spriteFrame = spriteFrame;
        });
    }

    loadMain() {
        const roomId = GameState.incomingRoomId || GameState.createdRoomId;
        const playerId = GameState.browserId;
        if (!cc.sys.isNative && window.socket && roomId && playerId) {
            window.socket.emit("leave-room", { roomId, playerId });
        }
        GameState.resetMultiplay();
        cc.sys.localStorage.removeItem("isHost");
        cc.director.loadScene("MainScene");
    }
}
