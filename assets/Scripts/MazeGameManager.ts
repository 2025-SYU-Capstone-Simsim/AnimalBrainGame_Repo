import MazeLogic from "./MazeLogic";
import MazePlayer from "./MazePlayer";
import GameData from "./GameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MazeGameManager extends cc.Component {
  @property(cc.Node)       mazeContainer: cc.Node      = null;
  @property(cc.Node)       player: cc.Node             = null;
  @property(cc.Node)       nextLevelButton: cc.Node    = null;
  @property(cc.Node)       backButton: cc.Node         = null;
  @property(cc.Label)      timerLabel: cc.Label        = null;
  @property(cc.Label)      levelLabel: cc.Label        = null;
  @property(cc.Node)       goal: cc.Node               = null;

  // 에디터에서 연결할 Goal 스프라이트 프레임
  @property(cc.SpriteFrame) goalFrame: cc.SpriteFrame   = null;

  // 타일맵용 에셋
  @property(cc.Prefab)      tilePrefab: cc.Prefab      = null;
  @property(cc.SpriteFrame) pathFrame: cc.SpriteFrame   = null;
  @property(cc.SpriteFrame) grassFrame: cc.SpriteFrame  = null;

  public cellSize: number = 50;
  public cols: number     = 15;
  public rows: number     = 15;

  private mazeLogic: MazeLogic    = null;
  private timeRemaining: number   = 60;
  public  gameOver: boolean       = false;
  private goalReached: boolean    = false;
  private currentLevel: number    = 1;
  private playerComp: MazePlayer  = null;

  onLoad() {
    this.nextLevelButton.on("click", this.onNextLevelButtonClick, this);
    this.backButton.on("click", this.onBackButtonClick, this);
  }

  start() {
    this.currentLevel = GameData.currentLevel;
    this.levelLabel.string = `Level: ${this.currentLevel}`;
    this.nextLevelButton.active = false;

    this.playerComp = this.player.getComponent(MazePlayer);
    if (this.playerComp) this.playerComp.gameManager = this;

    this.startLevel(this.currentLevel);
  }

  public getMazeLogic(): MazeLogic {
    return this.mazeLogic;
  }

  public startLevel(level: number): void {
    // cols/rows: 1~7레벨 9→21, 그 이후 21로 고정
    const size = Math.min(9 + (level - 1) * 2, 21);
    this.cols = size;
    this.rows = size;

    // cellSize 고정
    this.cellSize = 50;

    // MazeLogic 세팅
    this.mazeLogic = new MazeLogic(this.rows, this.cols, this.mazeContainer);
    this.mazeLogic.cellSize   = this.cellSize;
    this.mazeLogic.tilePrefab = this.tilePrefab;
    this.mazeLogic.pathFrame  = this.pathFrame;
    this.mazeLogic.grassFrame = this.grassFrame;
    this.mazeLogic.generateMaze(level);
    this.mazeLogic.renderMaze();

    // 중앙 정렬
    const w = this.cols * this.cellSize;
    const h = this.rows * this.cellSize;
    const baseX = (1080 - w) / 2;
    const baseY = (1920 - h) / 2;
    this.mazeContainer.setPosition(baseX, baseY);

    // 플레이어 배치
    const start = this.mazeLogic.getStartPosition();
    this.player.setPosition(
      cc.v2(
        baseX + start.x * this.cellSize + this.cellSize / 2,
        baseY + start.y * this.cellSize + this.cellSize / 2
      )
    );
    if (this.playerComp) this.playerComp.currentGridPos = cc.v2(start.x, start.y);

    // UI 초기화
    this.timeRemaining = 60;
    this.updateTimerLabel();
    this.gameOver    = false;
    this.goalReached = false;
    this.nextLevelButton.active = false;
    this.levelLabel.string      = `Level: ${level}`;

    // Goal(바나나) 자동 스케일 & 배치
    if (this.goal && this.goalFrame) {
      // 스프라이트 컴포넌트 확보
      const sp = this.goal.getComponent(cc.Sprite) || this.goal.addComponent(cc.Sprite);
      sp.spriteFrame = this.goalFrame;
      sp.type      = cc.Sprite.Type.SIMPLE;
      sp.sizeMode  = cc.Sprite.SizeMode.CUSTOM;

      // 원본 프레임 크기 가져오기
      const rect = this.goalFrame.getRect();
      const origW = rect.width;
      const targetSize = this.cellSize * 0.8;

      // 스케일 계산 & 적용
      const scale = targetSize / origW;
      this.goal.setScale(scale);

      // 위치 계산 후 배치
      const goalGrid = this.mazeLogic.getGoalPosition();
      this.goal.setPosition(
        cc.v2(
          baseX + goalGrid.x * this.cellSize + this.cellSize / 2,
          baseY + goalGrid.y * this.cellSize + this.cellSize / 2
        )
      );
      this.goal.zIndex = 500;
    }
  }

  update(dt: number) {
    if (this.gameOver) return;

    this.timeRemaining -= dt;
    if (this.timeRemaining <= 0) {
      this.timeRemaining = 0;
      this.updateTimerLabel();
      this.onGameOver();
      return;
    }
    this.updateTimerLabel();

    if (!this.goalReached) {
      const goalGrid = this.mazeLogic.getGoalPosition();
      const w = this.cols * this.cellSize;
      const h = this.rows * this.cellSize;
      const baseX = (1080 - w) / 2;
      const baseY = (1920 - h) / 2;
      const goalPos = cc.v2(
        baseX + goalGrid.x * this.cellSize + this.cellSize / 2,
        baseY + goalGrid.y * this.cellSize + this.cellSize / 2
      );
      if (this.player.getPosition().sub(goalPos).mag() < this.cellSize * 0.4) {
        this.goalReached = true;
        this.onMazeCleared();
      }
    }
  }

  private updateTimerLabel() {
    this.timerLabel.string = `Time: ${Math.ceil(this.timeRemaining)}s`;
  }

  private onMazeCleared() {
    this.nextLevelButton.active = true;
  }

  private onNextLevelButtonClick() {
    this.nextLevelButton.active = false;
    this.currentLevel++;
    GameData.currentLevel = this.currentLevel;
    this.startLevel(this.currentLevel);
  }

  private onGameOver() {
    this.gameOver = true;
    cc.director.loadScene("GameOverScene");
  }

  private onBackButtonClick() {
    GameData.currentLevel = 1;
    cc.director.loadScene("MainScene");
  }
}
