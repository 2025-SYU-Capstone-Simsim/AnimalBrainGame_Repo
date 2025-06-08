// /assets/Scripts/Jang/Multi/MultiplayerMazeGameScene.ts

import MazeMultiLogic       from "./MazeMultiLogic"
 import MultiRenderer        from "./MazeMultiRenderer"
 import PlayerController     from "./MazeMultiPlayerController"
 import MazeMultiGameFlowController from "../../Controller/Multi/MultiFlowController"


const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiplayerMazeGameScene extends cc.Component {
  @property(cc.Node)           localContainer!: cc.Node;
  @property(cc.Node)           remoteContainer!: cc.Node;
  @property(cc.Prefab)         tilePrefab!: cc.Prefab;
  @property(cc.SpriteFrame)    pathFrame!: cc.SpriteFrame;
  @property(cc.SpriteFrame)    grassFrame!: cc.SpriteFrame;
  @property(PlayerController)  localPlayerCtrl!: PlayerController;
  @property(PlayerController)  remotePlayerCtrl!: PlayerController;
  @property(cc.Prefab)         gameOverUIPrefab!: cc.Prefab;

  private logic!: MazeMultiLogic;
  private renderer!: MultiRenderer;
  private gameOver = false;

  onLoad() {
    // 1) 소켓 이벤트 리스너 등록 (한 번만)
    MazeMultiGameFlowController.initializeSocketListeners();

    // 2) 게임 시작 신호 수신
    cc.director.on("multi-game-start", this.startGame, this);

    // 3) 원격 경로 / 골 도달 수신
    cc.director.on("draw-path",         this.onRemoteDrawPath,         this);
    cc.director.on("playerReachedGoal", this.onRemotePlayerReachedGoal, this);
  }

  /**
   * 멀티 게임 시작 시 호출됩니다.
   */
  public startGame() {
    this.gameOver = false;
    // 4) 미로 생성 & 렌더러 초기화
    this.logic = new MazeMultiLogic(
      this.localContainer,
      this.tilePrefab,
      this.pathFrame,
      this.grassFrame,
      53    // 셀 크기(px)
    );
    this.logic.build(GameState.currentLevel);

    this.renderer = new MultiRenderer(
      this.localContainer,
      this.remoteContainer,
      this.tilePrefab,
      this.pathFrame,
      this.grassFrame,
      this.logic.cellSize
    );
    // 양쪽 모두 같은 미로로 렌더
    this.renderer.render(this.logic.maze, this.logic.maze);

    // 5) 플레이어 컨트롤러 초기화
    // 로직 & 시작 위치 설정
    this.localPlayerCtrl.mazeLogic  = this.logic;
    this.remotePlayerCtrl.mazeLogic = this.logic;
    this.localPlayerCtrl.resetPlayer();
    this.remotePlayerCtrl.resetPlayer();

    // 6) baseX/Y 계산 (로컬·원격 동기화)
    const cs   = this.logic.cellSize;
    const cols = this.logic.maze[0].length;
    const rows = this.logic.maze.length;
    // 화면 중앙 정렬 기준(1080×1920)
    const offsetX = (1080 - cols * cs) / 2;
    const offsetY = (1920 - rows * cs) / 2;
    // 로컬 컨테이너 기준
    const localPos = this.localContainer.getPosition();
    this.localPlayerCtrl.baseX = localPos.x + offsetX;
    this.localPlayerCtrl.baseY = localPos.y + offsetY;
    // 원격 컨테이너 기준
    const remotePos = this.remoteContainer.getPosition();
    this.remotePlayerCtrl.baseX = remotePos.x + offsetX;
    this.remotePlayerCtrl.baseY = remotePos.y + offsetY;

    // 7) 로컬 경로 그리기 → 서버 전송
    this.localPlayerCtrl.node.on(
      "path-drawn",
      (path: cc.Vec2[]) => {
        const gridPath: GridPos[] = path.map(v => ({ x: v.x, y: v.y }));
        MazeMultiGameFlowController.sendDrawPath(gridPath);
      },
      this
    );

    // 8) 로컬 골 도달 → 서버 전송 & 게임 오버 처리
    this.localPlayerCtrl.node.on(
      "playerReachedGoal",
      () => {
        const player = GameState.isHost ? "host" : "guest";
        MazeMultiGameFlowController.sendPlayerReachedGoal(player);
        this.showGameOver();
      },
      this
    );
  }

  /** 원격 플레이어 경로 수신 */
  private onRemoteDrawPath(data: { path: GridPos[]; player: string }) {
    const isHost    = GameState.isHost;
    const fromGuest = isHost ? data.player === "guest" : data.player === "host";
    if (!fromGuest) return;
    const gridPath = data.path.map(p => cc.v2(p.x, p.y));
    this.remotePlayerCtrl.followPath(gridPath);
  }

  /** 원격 플레이어 골 도달 수신 */
  private onRemotePlayerReachedGoal(data: { player: string }) {
    const isHost    = GameState.isHost;
    const fromGuest = isHost ? data.player === "guest" : data.player === "host";
    if (!fromGuest) return;
    this.remotePlayerCtrl.node.emit("playerReachedGoal");
    this.showGameOver();
  }

  /** 게임 오버 UI 표시 */
  private showGameOver() {
    if (this.gameOver) return;
    this.gameOver = true;
    if (!this.gameOverUIPrefab) return;
    const ui = cc.instantiate(this.gameOverUIPrefab);
    const canvas = cc.find("Canvas");
    canvas.addChild(ui);
    ui.zIndex = 1000;
    ui.setSiblingIndex(canvas.childrenCount - 1);
    ui.setPosition(0, 0);
  }
}
