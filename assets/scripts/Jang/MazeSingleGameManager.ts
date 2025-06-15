// /assets/Scripts/main/GameManager.ts
import GameData from "./MazeGameData";
import MazeLogic from "./MazeLogic";
import PlayerController from "./MazePlayerController";
import UIManager from "./MazeUIManager";
import GameState from "../Controller/CommonUI/GameState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
  @property(cc.Node) mazeContainer!: cc.Node;
  @property(PlayerController) playerCtrl!: PlayerController;
  @property(UIManager) uiMgr!: UIManager;
  @property(cc.Node) goalNode!: cc.Node;
  @property(cc.Prefab) tilePrefab!: cc.Prefab;
  @property(cc.SpriteFrame) pathFrame!: cc.SpriteFrame;
  @property(cc.SpriteFrame) grassFrame!: cc.SpriteFrame;
  @property(cc.SpriteFrame) goalSongpyeon!: cc.SpriteFrame;
  @property(cc.SpriteFrame) goalBone!: cc.SpriteFrame;
  @property(cc.SpriteFrame) goalCarrot!: cc.SpriteFrame;

  @property(cc.Prefab) gameStartOverlayPrefab!: cc.Prefab;
  @property(cc.Prefab) gameOverUIPrefab!: cc.Prefab;

  private logic!: MazeLogic;
  private timeRem = 60;
  private gameOver = false;

  // ─ 골 도착을 별도로 표시할 플래그 추가 ─
  private isGoalReached = false;

  public debugSetLevel(lv: number) {
    this._startLevel(lv);
  }
  public debugSetTime(t: number) {
    this.timeRem = t;
    if (this.uiMgr) this.uiMgr.setTimer(this.timeRem);
  }
onLoad() {
  this.node.on("nextLevel", () => this._startLevel(GameData.currentLevel + 1));

  // 이제는 이벤트 리스너를 비워 두거나 아예 지워도 무방합니다.
  this.playerCtrl.node.on("playerReachedGoal", () => {
    // 아무 코드도 없으므로, 골 도달 시에는 여기서 아무런 처리를 하지 않습니다.
  }, this);
}




  start() {
    GameState.lastGameScene = cc.director.getScene().name;
  if (this.gameStartOverlayPrefab) {
  const startOverlay = cc.instantiate(this.gameStartOverlayPrefab);

  // ❌ 지우기
  // this.node.addChild(startOverlay);

  // ✅ Canvas에만 붙이기
  const canvas = cc.find("Canvas");
  canvas.addChild(startOverlay);

  // zIndex 설정
  startOverlay.zIndex = 1000;
  // 같은 부모 내 맨 뒤로 보내기
  startOverlay.setSiblingIndex(canvas.childrenCount - 1);

  startOverlay.setPosition(540, 960);
      const anim = startOverlay.getComponent(cc.Animation);
      if (anim) {
        anim.play("GameStartFade");
        anim.once(cc.Animation.EventType.FINISHED, () => {
          startOverlay.destroy();
          this.startGameLogic();
        }, this);
      } else {
        this.scheduleOnce(() => {
          startOverlay.destroy();
          this.startGameLogic();
        }, 1.5);
      }
    } else {
      this.startGameLogic();
    }

    (window as any).GM = this;
  }

  private startGameLogic() {
    // 매 게임 시작 시, score를 0으로 재설정
    this.uiMgr.setScore(0);
    GameData.score = 0;  

    // MazeLogic 인스턴스 생성 & 할당
    this.logic = new MazeLogic(
      this.mazeContainer,
      this.tilePrefab, this.pathFrame, this.grassFrame,
      50
    );
    this.playerCtrl.mazeLogic = this.logic;

    // 골 도착 플래그 초기화
    this.isGoalReached = false;
    this.gameOver = false;

    // currentLevel 그대로 사용(최초에는 1)
    this._startLevel(GameData.currentLevel);
  }

  private _startLevel(lv: number) {
    GameData.currentLevel = lv;
    this.timeRem = 30;
    this.gameOver = false;
    this.isGoalReached = false;  // 레벨 시작할 때마다 초기화

    // 21×21 고정
    this.logic = new MazeLogic(
      this.mazeContainer,
      this.tilePrefab, this.pathFrame, this.grassFrame,
      50
    );
    this.playerCtrl.mazeLogic = this.logic;
    this.logic.build(lv);

    const cs = this.logic.cellSize;
    const cols = this.logic.maze[0].length;
    const rows = this.logic.maze.length;
    const baseX = (1080 - cols * cs) / 2;
    const baseY = (1920 - rows * cs) / 2;
    this.mazeContainer.setPosition(baseX, baseY);

    this.playerCtrl.baseX = baseX;
    this.playerCtrl.baseY = baseY;

    // ─ 플레이어 완전 초기화: resetPlayer 호출
    this.playerCtrl.resetPlayer();
    // ─ 실제 시작 좌표로 덮어쓰기
    const st = this.logic.getStartPosition();
    this.playerCtrl.currentGridPos = cc.v2(st.x, st.y);
    this.playerCtrl.node.setPosition(
      baseX + st.x * cs + cs / 2,
      baseY + st.y * cs + cs / 2
    );

    // ─ 목표 스프라이트 설정 & 배치
    let goalSprite: cc.SpriteFrame;
    switch (GameData.playerType) {
      case "tiger":  goalSprite = this.goalSongpyeon; break;
      case "dog":    goalSprite = this.goalBone;      break;
      case "rabbit": goalSprite = this.goalCarrot;    break;
      default:       goalSprite = this.goalSongpyeon; break;
    }
    let sp = this.goalNode.getComponent(cc.Sprite);
    if (!sp) sp = this.goalNode.addComponent(cc.Sprite);
    sp.type = cc.Sprite.Type.SIMPLE;
    sp.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    this.goalNode.setContentSize(cs, cs);
    this.goalNode.zIndex = 500;
    sp.spriteFrame = goalSprite;

    const go = this.logic.getGoalPosition();
    this.goalNode.setPosition(
      cc.v2(
        baseX + go.x * cs + cs / 2,
        baseY + go.y * cs + cs / 2
      )
    );

    // UI 타이머 초기화
    this.uiMgr.setTimer(this.timeRem);
    // UI 점수(이전 레벨에서 더해진 점수)가 있다면 표시
    this.uiMgr.setScore(GameData.score);
  }

 update(dt: number) {
  if (!this.logic || !this.logic.maze || this.gameOver) return;

  const cs   = this.logic.cellSize;
  const cols = this.logic.maze[0].length;
  const rows = this.logic.maze.length;
  const baseX = (1080 - cols * cs) / 2;
  const baseY = (1920 - rows * cs) / 2;

  // ① 거리 기반 골 판정 (여기서만 한 번 점수 + 레벨업 예약)
  const go = this.logic.getGoalPosition();
  const goalWorld = cc.v2(
    baseX + go.x * cs + cs / 2,
    baseY + go.y * cs + cs / 2
  );
  if (!this.isGoalReached &&
      this.playerCtrl.node.getPosition().sub(goalWorld).mag() < cs * 0.5) {
    this.isGoalReached = true;
    this.gameOver = true;

    // 점수는 한 번만 +10
    GameData.addScore(GameData.currentLevel);
    this.uiMgr.setScore(GameData.score);

    // → 아주 짧은 지연(0초)으로 다음 프레임에 _startLevel 호출
    this.scheduleOnce(() => {
      this._startLevel(GameData.currentLevel + 1);
    }, 0.1);
    return;
  }

  // ② 시간 차감 & 시간초과 판정
  this.timeRem -= dt;
  this.uiMgr.setTimer(this.timeRem);
  if (this.timeRem <= 0) {
    this.gameOver = true;
            // 게임 상태 저장
            GameState.lastGameScene = cc.director.getScene().name;
            GameState.score = GameData.score;
            GameState.gameId = "maze-game"; // 기억력 게임 고유 식별자
    if (this.gameOverUIPrefab) {
  const gameOverUI = cc.instantiate(this.gameOverUIPrefab);

  // ① Canvas에 붙이기
  const canvas = cc.find("Canvas");
  canvas.addChild(gameOverUI);

  // ② zIndex 설정 (player·goal 500 위)
  gameOverUI.zIndex = 1000;

  // ③ 같은 부모 내 맨 뒤로 보내기
  gameOverUI.setSiblingIndex(canvas.childrenCount - 1);

  // ④ 화면 중앙에 배치
  gameOverUI.setPosition(540, 960);

      const retryBtn = gameOverUI.getChildByName("RetryButton");
      if (retryBtn) {
        retryBtn.on(cc.Node.EventType.TOUCH_END, () => {
          GameData.score = 0;
          this.uiMgr.setScore(0);
          GameData.currentLevel = 1;
          this._startLevel(1);
          gameOverUI.destroy();
        }, this);
      }
    }
    GameData.currentLevel = 1;
    return;
  }
}


    // 4) (필요하다면) 아직 골도 안 닿았고, 시간도 남은 상태에서 추가 로직...
}

