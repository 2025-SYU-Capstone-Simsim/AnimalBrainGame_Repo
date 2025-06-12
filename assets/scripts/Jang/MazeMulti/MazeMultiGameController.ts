// File: MultiplayerMazeGameController.ts

import PlayerMazeGameScene from "./PlayerMazeGameScene";
import OpponentMazeViewer from "./OpponentMazeViewer";
import GameState from "../../Controller/CommonUI/GameState";
import MultiGameFlowController from "../../Controller/Multi/MultiFlowController";

const { ccclass, property } = cc._decorator;

declare global {
  interface Window {
    socket: any;
  }
}

@ccclass
export default class MultiplayerMazeGameController extends cc.Component {
  @property(cc.Node) myGameArea: cc.Node = null;
  @property(cc.Node) opponentGameArea: cc.Node = null;
  @property(cc.Node) exitButton: cc.Node = null;

  @property(cc.Label) myNameLabel: cc.Label = null;
  @property(cc.Node) myCharacterNode: cc.Node = null;

  @property(cc.Label) guestNameLabel: cc.Label = null;
  @property(cc.Node) guestCharacterNode: cc.Node = null;

  private myGameCtrl: PlayerMazeGameScene = null;
  private opponentView: OpponentMazeViewer = null;

  private _alreadyStarted = false;

  start() {
    console.log("[MMGC] myGameArea 연결 상태:", !!this.myGameArea);

    if (this._alreadyStarted) return;
    this._alreadyStarted = true;

    // 1) GameState 복구
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

    // 2) 컨트롤러 연결
    this.myGameCtrl = this.myGameArea?.getComponent(PlayerMazeGameScene) || null;
    this.opponentView = this.opponentGameArea?.getComponent(OpponentMazeViewer) || null;

    // 3) maze-data 수신 시 applyMaze()
    cc.director.on("maze-data", (payload: { maze: number[][] }) => {
      if (!GameState.isHost && this.myGameCtrl) {
        this.myGameCtrl.applyMaze(payload.maze);
        cc.log("[게스트] maze-data 수신 → applyMaze()");
      }
    });

    // 4) 상대 위치 수신
    cc.director.on("opponent-move", (payload: { x: number; y: number }) => {
      if (this.opponentView) {
        this.opponentView.onOpponentMoved(payload);
      }
    });

    // ✅ 5) 게임 시작 이벤트 수신
    cc.director.on("multi-game-start", () => {
      cc.log("[MMGC] 'multi-game-start' 수신 → myGameCtrl:", this.myGameCtrl);

      if (this.myGameCtrl) {
        this.myGameCtrl.startGame();

        if (GameState.isHost) {
          // 🔧 generate 이후 100ms 지연 후 maze emit
          setTimeout(() => {
            const maze = this.myGameCtrl.getLogic().getMaze();
            const roomId = GameState.createdRoomId;
            if (maze && maze.length && window.socket && roomId) {
              cc.log("[호스트] maze-data emit:", maze);
              window.socket.emit("game-event", {
                type: "maze-data",
                roomId,
                payload: { maze }
              });
            } else {
              cc.warn("[호스트] maze emit 실패 - maze 데이터 없음");
            }
          }, 100);
        }
      }
    });

    // 6) 닉네임/캐릭터 UI 세팅
    this.setPlayerInfoFromGameState();

    // 7) 소켓 리스너 등록
    MultiGameFlowController.initializeSocketListeners();

    // 8) 종료 버튼
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
