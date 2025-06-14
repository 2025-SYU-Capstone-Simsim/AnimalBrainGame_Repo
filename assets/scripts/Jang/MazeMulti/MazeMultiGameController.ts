import PlayerMazeGameScene from "./PlayerMazeGameScene";
import OpponentMazeViewer from "./OpponentMazeViewer";
import GameState from "../../Controller/CommonUI/GameState";
import MultiGameFlowController from "../../Controller/Multi/MultiFlowController";

const { ccclass, property } = cc._decorator;

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
    if (this._alreadyStarted) return;
    this._alreadyStarted = true;

    // 1. GameState 복구
    const savedHost = cc.sys.localStorage.getItem("isHost");
    GameState.isHost = savedHost === "true";
    cc.log("복원된 isHost 값:", GameState.isHost);

    // 2. 컴포넌트 연결
    this.myGameCtrl = this.myGameArea?.getComponent(PlayerMazeGameScene);
    this.opponentView = this.opponentGameArea?.getComponent(OpponentMazeViewer);

    cc.log("[MazeCtrl] myGameArea 연결:", !!this.myGameCtrl);
    cc.log("[MazeCtrl] opponentGameArea 연결:", !!this.opponentView);

    if (!this.myGameCtrl) cc.error("[MazeCtrl] myGameCtrl 연결 실패");
    if (!this.opponentView) cc.error("[MazeCtrl] opponentView 연결 실패");

    // 3. 이벤트 등록
    cc.director.on("multi-game-start", this.onGameStart, this);
    cc.director.on("maze-data", this.onMazeDataReceived, this);
    cc.director.on("opponent-move", this.onOpponentMoveReceived, this);

    // 4. 플레이어 정보 세팅
    this.setPlayerInfoFromGameState();

    // 5. 소켓 초기화
    MultiGameFlowController.initializeSocketListeners();

    // 6. 종료 버튼
    if (this.exitButton) {
      this.exitButton.on(cc.Node.EventType.TOUCH_END, this.loadMain, this);
    }
  }

  onDestroy() {
    cc.director.off("multi-game-start", this.onGameStart, this);
    cc.director.off("maze-data", this.onMazeDataReceived, this);
    cc.director.off("opponent-move", this.onOpponentMoveReceived, this);
  }

  onGameStart() {
    cc.log("[MazeCtrl] ▶ multi-game-start 수신");

    if (!this.myGameCtrl) {
      cc.error("[MazeCtrl] myGameCtrl 없음");
      return;
    }

    this.myGameCtrl.startGame();

    if (GameState.isHost) {
      const maze = this.myGameCtrl.getLogic().getMaze();
      const roomId = GameState.createdRoomId;

      if (maze && window.socket?.connected && roomId) {
        cc.log("[MazeCtrl] ▶ Host가 maze-data emit:", maze);
        window.socket.emit("game-event", {
          type: "maze-data",
          roomId,
          payload: { maze }
        });
      }
    }
  }

  onMazeDataReceived(payload: { maze: number[][] }) {
    cc.log("[MazeCtrl] 🧩 maze-data 수신:", payload);

    if (!GameState.isHost && this.myGameCtrl) {
      this.myGameCtrl.applyMaze(payload.maze);
    }
  }

  onOpponentMoveReceived(payload: { x: number; y: number }) {
    cc.log("[MazeCtrl] 🧍‍♂️ opponent-move 수신:", payload);

    this.opponentView?.onOpponentMoved(payload);
  }

  setPlayerInfoFromGameState() {
    const { isHost, nickname, character, guestNickname, guestCharacter, hostNickname, hostCharacter } = GameState;

    if (isHost) {
      this.myNameLabel.string = nickname || "나";
      this.guestNameLabel.string = guestNickname || "게스트";
      this.setCharacterSprite(this.myCharacterNode, character || "dog");
      this.setCharacterSprite(this.guestCharacterNode, guestCharacter || "rabbit");
    } else {
      this.myNameLabel.string = nickname || "나";
      this.guestNameLabel.string = hostNickname || "호스트";
      this.setCharacterSprite(this.myCharacterNode, character || "dog");
      this.setCharacterSprite(this.guestCharacterNode, hostCharacter || "tiger");
    }
  }

  setCharacterSprite(node: cc.Node, characterKey: string) {
    const sprite = node.getComponent(cc.Sprite);
    if (!sprite) return;

    sprite.spriteFrame = null;
    const path = `Images/Common/characters/${characterKey}Head`;

    cc.resources.load(path, cc.SpriteFrame, (err, frame) => {
      if (!err && frame) sprite.spriteFrame = frame;
    });
  }

  loadMain() {
    const roomId = GameState.incomingRoomId || GameState.createdRoomId;
    const playerId = GameState.browserId;

    if (!cc.sys.isNative && window.socket?.connected && roomId && playerId) {
      window.socket.emit("leave-room", { roomId, playerId });
    }

    GameState.resetMultiplay();
    cc.sys.localStorage.removeItem("isHost");
    cc.director.loadScene("MainScene");
  }
}
