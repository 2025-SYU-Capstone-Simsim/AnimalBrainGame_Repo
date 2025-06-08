// /assets/Scripts/Jang/MazeMulti/MultiplayerMazeGameController.ts

import MultiplayerMazeGameScene from "./MultiplayerMazeGameScene";
import GameState                from "../../Controller/CommonUI/GameState";
import MazeMultiGameFlowController
                                from "../../Controller/Multi/MultiFlowController";

const { ccclass, property } = cc._decorator;

declare global {
  interface Window { socket: any; }
}

@ccclass
export default class MultiplayerMazeGameController extends cc.Component {
  /** 멀티 미로 씬 컨트롤러가 붙은 노드 */
  @property(cc.Node) gameSceneNode!: cc.Node;
  /** 종료 버튼 */
  @property(cc.Node)  exitButton!: cc.Node;

  @property(cc.Label) myNameLabel!: cc.Label;
  @property(cc.Node)  myCharacterNode!: cc.Node;
  @property(cc.Label) guestNameLabel!: cc.Label;
  @property(cc.Node)  guestCharacterNode!: cc.Node;

  private sceneCtrl: MultiplayerMazeGameScene | null = null;
  private _started = false;

  start() {
    if (this._started) return;
    this._started = true;

    // 1) multi-game-start 이벤트로 게임 시작
    cc.director.on("multi-game-start", () => {
      if (this.sceneCtrl) {
        this.sceneCtrl.startGame();
      } else {
        cc.error("[MMGC] sceneCtrl is null, cannot start game");
      }
    });

    // 2) GameState 복구
    const seq = cc.sys.localStorage.getItem("selectedGameSequence");
    const idx = cc.sys.localStorage.getItem("currentGameIndex");
    if (seq) {
      try {
        GameState.selectedGameSequence = JSON.parse(seq);
        GameState.currentGameIndex      = Number(idx) || 0;
      } catch {}
    }
    GameState.isHost = cc.sys.localStorage.getItem("isHost") === "true";

    // 3) 씬 컨트롤러 연결
    this.sceneCtrl = this.gameSceneNode.getComponent(MultiplayerMazeGameScene);
    if (!this.sceneCtrl) {
      cc.error("[MMGC] gameSceneNode에 MultiplayerMazeGameScene 컴포넌트가 없습니다.");
    }

    // 4) UI 닉네임·캐릭터 세팅
    this.setPlayerInfoFromGameState();

    // 5) 소켓 이벤트 초기화
    MazeMultiGameFlowController.initializeSocketListeners();

    // 6) 원격 플레이어 경로 그리기 수신
    cc.director.on("draw-path", (data: { path: { x: number; y: number }[]; player: string }) => {
      if (!this.sceneCtrl) return;
      const isHost    = GameState.isHost;
      const fromRemote = isHost ? data.player === "guest" : data.player === "host";
      if (!fromRemote) return;
      const gridPath = data.path.map(p => cc.v2(p.x, p.y));
      this.sceneCtrl.remotePlayerCtrl.followPath(gridPath);
    });

    // 7) 원격 플레이어 골 도달 수신
    cc.director.on("playerReachedGoal", (data: { player: string }) => {
      if (!this.sceneCtrl) return;
      const isHost    = GameState.isHost;
      const fromRemote = isHost ? data.player === "guest" : data.player === "host";
      if (!fromRemote) return;
      this.sceneCtrl.remotePlayerCtrl.node.emit("playerReachedGoal");
    });

    // 8) 종료 버튼
    this.exitButton?.on(cc.Node.EventType.TOUCH_END, this.loadMain, this);
  }

  private setPlayerInfoFromGameState() {
    const isHost     = GameState.isHost;
    const myName     = GameState.nickname || "나";
    const myChar     = GameState.character || "tiger";
    const guestName  = isHost ? GameState.guestNickname : GameState.hostNickname;
    const guestChar  = isHost ? GameState.guestCharacter : GameState.hostCharacter;

    if (this.myNameLabel)    this.myNameLabel.string    = myName;
    if (this.guestNameLabel) this.guestNameLabel.string = guestName;
    this.setCharacterSprite(this.myCharacterNode, myChar);
    this.setCharacterSprite(this.guestCharacterNode, guestChar);
  }

  private setCharacterSprite(node: cc.Node, key: string) {
    const sp = node.getComponent(cc.Sprite);
    if (!sp) return;
    const path = `Images/Common/characters/${key}Head`;
    cc.resources.load(path, cc.SpriteFrame, (err, frame) => {
      if (!err && frame) sp.spriteFrame = frame;
    });
  }

  private loadMain() {
    const roomId   = GameState.incomingRoomId || GameState.createdRoomId;
    const playerId = GameState.browserId;
    if (!cc.sys.isNative && window.socket && roomId && playerId) {
      window.socket.emit("leave-room", { roomId, playerId });
    }
    GameState.resetMultiplay();
    cc.sys.localStorage.removeItem("isHost");
    cc.director.loadScene("MainScene");
  }
}
