import PlayerMoleGameScene from "./MultiplayerGameScene";
import OpponentMoleViewer from "./MultiGuestViewer";
import GameState from "../../Controller/CommonUI/GameState";
import MultiGameFlowController from "../../Controller/Multi/MultiFlowController";

const { ccclass, property } = cc._decorator;

declare global {
    interface Window {
        socket: any;
    }
}

@ccclass
export default class MultiplayerMoleGameController extends cc.Component {
    @property(cc.Node) myGameArea: cc.Node = null;
    @property(cc.Node) opponentGameArea: cc.Node = null;
    @property(cc.Button) exitButton: cc.Node = null;

    @property(cc.Label) myNameLabel: cc.Label = null;
    @property(cc.Node) myCharacterNode: cc.Node = null;

    @property(cc.Label) guestNameLabel: cc.Label = null;
    @property(cc.Node) guestCharacterNode: cc.Node = null;

    private myGameCtrl: PlayerMoleGameScene = null;
    private opponentView: OpponentMoleViewer = null;

    private _alreadyStarted = false;

    start() {
        if (this._alreadyStarted) {
            cc.warn("start() 중복 실행 방지");
            return;
        }
        this._alreadyStarted = true;
        // selectedGameSequence 복구
        const savedSequence = cc.sys.localStorage.getItem("selectedGameSequence");
        const savedIndex = cc.sys.localStorage.getItem("currentGameIndex");
        if (savedSequence) {
            try {
                GameState.selectedGameSequence = JSON.parse(savedSequence);
                GameState.currentGameIndex = Number(savedIndex) || 0;
                cc.log("GameState 복구 완료:", GameState.selectedGameSequence, GameState.currentGameIndex);
            } catch (e) {
                cc.warn("selectedGameSequence 복구 실패:", e);
            }
        }

        // localStorage에서 isHost 복구
        const savedHost = cc.sys.localStorage.getItem("isHost");
        GameState.isHost = savedHost === "true";
        cc.log("복원된 isHost 값:", GameState.isHost);

        cc.log("MultiplayerMoleGameController start() 실행됨");

        this.myGameCtrl = this.myGameArea.getComponent(PlayerMoleGameScene);
        if (!this.myGameCtrl) cc.error("PlayerMoleGameScene 컴포넌트 연결 실패");

        this.opponentView = this.opponentGameArea.getComponent(OpponentMoleViewer);
        if (!this.opponentView) cc.error("OpponentMoleViewer 컴포넌트 연결 실패");

        this.setPlayerInfoFromGameState();

        const roomId = GameState.createdRoomId || GameState.incomingRoomId;
        if (!cc.sys.isNative && window.socket && roomId) {
            console.log("현재 isHost 상태:", GameState.isHost);

            // 호스트와 게스트 모두 join-room 실행
            window.socket.emit("join-room", roomId);

            // 기존 리스너 제거
            window.socket.off("game-event");

            // 리스너 등록
            window.socket.on("game-event", (payload: any) => {
                const type = payload?.type;
                const data = payload?.payload; // payload가 곧 data

                console.log("game-event 수신:", type, payload);
                console.log("isHost 상태 확인:", GameState.isHost);

                switch (type) {
                    case "guest-ready":
                        if (GameState.isHost) {
                            console.log("host 조건 만족 → game-start emit");
                            window.socket.emit("game-event", {
                                type: "game-start",
                                roomId,
                                payload: {}  // 아직 특별한 데이터 없음
                            });
                            this.myGameCtrl.startGame();
                        }
                        break;

                    case "game-start":
                        if (!GameState.isHost) {
                            console.log("[게스트] game-start 수신 → 게임 시작!");
                            this.myGameCtrl.startGame();
                        }
                        break;

                    case "spawn-mole":
                        if (data) {
                            console.log("상대 두더지 생성:", data);
                            this.opponentView.spawnMoleFromData(data);
                        } else {
                            console.warn("spawn-mole payload 없음");
                        }
                        break;

                    case "hit-mole":
                        if (data) {
                            console.log("상대 두더지 맞춤:", data);
                            this.opponentView.hitMoleAnimation(data.index, data.moleType);
                        } else {
                            console.warn("hit-mole payload 없음");
                        }
                        break;

                    case "game-end":
                        console.log("game-end 수신 → 서버가 move-scene 보내줄 것, 클라 처리 없음");
                        break;

                    case "move-scene":
                        const sceneName = data?.sceneName;
                        if (sceneName) {
                            console.log("move-scene 수신 → 씬 이동:", sceneName);
                            cc.director.loadScene(sceneName);
                        } else {
                            console.warn("move-scene 수신: sceneName 없음");
                        }
                        break;
                    case "score-update":
                        const player = data?.player;
                        const score = data?.score;
                        console.log(`[score-update] from ${player}: ${score}`);

                        if (!GameState.isHost && player === "host") {
                            this.opponentView.setScore(score);
                        } else if (GameState.isHost && player === "guest") {
                            this.opponentView.setScore(score);
                        }
                        break;

                    case "host-left":
                        cc.warn("호스트가 중간에 나갔습니다. 메인 화면으로 이동합니다.");
                        GameState.resetMultiplay();
                        cc.director.loadScene("MainScene");
                        break;



                    default:
                        console.warn("알 수 없는 game-event 타입:", type);
                }
            });



            cc.log("[소켓 리스너] game-event 리스너 등록 완료");

            // 게스트는 guest-ready emit 추가로 실행
            if (!GameState.isHost) {
                setTimeout(() => {
                    console.log("[게스트] guest-ready emit:", roomId);
                    window.socket.emit("game-event", {
                        type: "guest-ready",
                        roomId,
                        payload: { playerId: GameState.browserId || "" }
                    });
                }, 300); // 리스너 등록 이후에 emit
            }
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
            if (!err && spriteFrame) {
                sprite.spriteFrame = spriteFrame;
            }
        });
    }

    loadMain() {
        console.log("메인메뉴로 돌아가기");

        // 1. leave-room emit 먼저 (초기화 전에)
        if (!cc.sys.isNative && window.socket) {
            const roomId = GameState.incomingRoomId || GameState.createdRoomId;
            const playerId = GameState.browserId;

            console.log("leave-room emit:", { roomId, playerId });

            if (roomId && playerId) {
                window.socket.emit("leave-room", { roomId, playerId });
            } else {
                console.warn("leave-room emit 차단됨 (누락):", { roomId, playerId });
            }
        }

        // 2. GameState 초기화는 그 다음
        GameState.resetMultiplay();
        cc.sys.localStorage.removeItem("isHost");

        // 3. 메인 씬 이동
        const canvas = document.getElementById("GameCanvas");
        if (canvas) canvas.style.cursor = "default";
        cc.director.loadScene("MainScene");
    }

} 