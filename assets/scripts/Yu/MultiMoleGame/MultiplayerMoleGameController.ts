// File: MultiplayerMoleGameController.ts

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
    @property(cc.Node) exitButton: cc.Node = null;

    @property(cc.Label) myNameLabel: cc.Label = null;
    @property(cc.Node) myCharacterNode: cc.Node = null;

    @property(cc.Label) guestNameLabel: cc.Label = null;
    @property(cc.Node) guestCharacterNode: cc.Node = null;

    private myGameCtrl: PlayerMoleGameScene = null;
    private opponentView: OpponentMoleViewer = null;

    private _alreadyStarted = false;

    start() {
        console.log("[MMGC] myGameArea 연결 상태:", !!this.myGameArea);
        console.log("[MMGC] myGameArea에 PlayerMoleGameScene이 붙었는가:", !!(this.myGameArea && this.myGameArea.getComponent(PlayerMoleGameScene)));

        if (this._alreadyStarted) return;
        this._alreadyStarted = true;

        // ─── 1) “multi-game-start” 리스너를 제일 먼저 등록 ───
        cc.director.on("multi-game-start", () => {
            console.log("[MMGC] 'multi-game-start' 수신 → myGameCtrl:", this.myGameCtrl);
            if (this.myGameCtrl) {
                this.myGameCtrl.startGame();
            } else {
                cc.error("[MMGC] myGameCtrl이 null이라 startGame을 호출할 수 없습니다.");
            }
        });
        console.log("[MMGC] 'multi-game-start' 리스너 등록 완료");

        // ─── 2) GameState 복구 ───
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
        const savedHost = cc.sys.localStorage.getItem("isHost");
        GameState.isHost = savedHost === "true";
        cc.log("복원된 isHost 값:", GameState.isHost);

        // ─── 3) 상대편 뷰어/내 화면 컨트롤러 연결 ───
        this.myGameCtrl = this.myGameArea ? this.myGameArea.getComponent(PlayerMoleGameScene) : null;
        console.log("[MMGC] myGameArea 노드:", this.myGameArea);
        console.log("[MMGC] 할당된 myGameCtrl:", this.myGameCtrl);
        if (!this.myGameArea) {
            cc.error("[MMGC] 에러: myGameArea 프로퍼티가 반드시 Inspector에서 연결되어야 합니다.");
        }
        if (!this.myGameCtrl) {
            cc.error("[MMGC] 에러: myGameArea 노드에 PlayerMoleGameScene 컴포넌트가 붙어 있는지 확인하세요.");
        }

        this.opponentView = this.opponentGameArea ? this.opponentGameArea.getComponent(OpponentMoleViewer) : null;
        console.log("[MMGC] opponentGameArea 노드:", this.opponentGameArea);
        console.log("[MMGC] 할당된 opponentView:", this.opponentView);
        if (!this.opponentGameArea) {
            cc.error("[MMGC] 에러: opponentGameArea 프로퍼티가 반드시 Inspector에서 연결되어야 합니다.");
        }
        if (!this.opponentView) {
            cc.error("[MMGC] 에러: opponentGameArea 노드에 OpponentMoleViewer 컴포넌트가 붙어 있는지 확인하세요.");
        }

        // ─── 4) 화면에 닉네임·캐릭터 세팅 ───
        this.setPlayerInfoFromGameState();

        // ─── 5) 공통 소켓 초기화 + 리스너 등록 ───
        MultiGameFlowController.initializeSocketListeners();

        // ─── 6) 상대편 spawn/히트/점수 업데이트 이벤트 바인딩 ───
        cc.director.on("spawn-mole", (data: any) => {
            console.log("[MMGC] 'spawn-mole' 이벤트 수신 →", data);
            if (this.opponentView) {
                this.opponentView.spawnMoleFromData(data);
            }
        });
        cc.director.on("hit-mole", (data: any) => {
            console.log("[MMGC] 'hit-mole' 이벤트 수신 →", data);
            if (this.opponentView) {
                this.opponentView.hitMoleAnimation(data.index, data.moleType);
            }
        });

        // ─── 6-1) score-update 리스너 수정 ───
        cc.director.on("score-update", (data: { player: "host" | "guest"; score: number }) => {
        // "내가 보낸 점수"는 무시하고, 상대방 점수만 UI에 표시!
        const isHost = GameState.isHost;
        if (isHost && data.player === "guest") {
            this.opponentView.setScore(data.score);
        } else if (!isHost && data.player === "host") {
            this.opponentView.setScore(data.score);
        }
        // 만약 내 점수인데 여기서 내 opponentView도 바꾸면 UI 꼬임 발생!
        });



        // ─── 7) 종료 버튼 연결 (메인으로) ───
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
            console.log("[MMGC] 'leave-room' emit →", { roomId, playerId });
            window.socket.emit("leave-room", { roomId, playerId });
        }
        GameState.resetMultiplay();
        cc.sys.localStorage.removeItem("isHost");
        cc.director.loadScene("MainScene");
    }
}
