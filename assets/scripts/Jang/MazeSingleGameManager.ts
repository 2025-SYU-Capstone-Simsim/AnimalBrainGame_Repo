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
  @property(cc.SpriteFrame) goalSongpyeon!: cc.SpriteFrame; // 호랑이의 목표(송편)
  @property(cc.SpriteFrame) goalBone!: cc.SpriteFrame;      // 강아지의 목표(뼈)
  @property(cc.SpriteFrame) goalCarrot!: cc.SpriteFrame;    // 토끼의 목표(당근)

  @property(cc.Prefab) gameStartOverlayPrefab!: cc.Prefab;
  @property(cc.Prefab) gameOverUIPrefab!: cc.Prefab;


  private logic!: MazeLogic;
  private timeRem = 5;
  private gameOver = false;

  // 디버그전용
  public debugSetLevel(lv: number) {
    this._startLevel(lv);
  }

  // 남은 시간을 수동으로 조정
  public debugSetTime(t: number) {
    this.timeRem = t;
    if (this.uiMgr) this.uiMgr.setTimer(this.timeRem);
  }



  //여기부터
  onLoad() {
    this.node.on("nextLevel", () => this._startLevel(GameData.currentLevel + 1));
  }

  start() {
    GameState.lastGameScene = cc.director.getScene().name;
    if (this.gameStartOverlayPrefab) {
      const startOverlay = cc.instantiate(this.gameStartOverlayPrefab);
      this.node.addChild(startOverlay);
      startOverlay.setPosition(0, 0);

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

    // 디버깅용 인스턴스 노출
    (window as any).GM = this;
  }

  private startGameLogic() {
    this.uiMgr.setScore(0);
    this.logic = new MazeLogic(
      this.mazeContainer,
      this.tilePrefab, this.pathFrame, this.grassFrame,
      50
    );
    this.playerCtrl.mazeLogic = this.logic;
    this._startLevel(GameData.currentLevel);
  }


  private _startLevel(lv: number) {
    GameData.currentLevel = lv;
    this.timeRem = 5; // 30초로 임시 수정 
    this.gameOver = false;

    // 21x21 고정
    this.logic = new MazeLogic(
      this.mazeContainer,
      this.tilePrefab, this.pathFrame, this.grassFrame,
      50
    );
    this.playerCtrl.mazeLogic = this.logic;

    this.logic.build(lv);

    // 중앙정렬 (가로 1080, 세로 1920 기준)
    const cs = this.logic.cellSize;
    const cols = this.logic.maze[0].length;
    const rows = this.logic.maze.length;
    const baseX = (1080 - cols * cs) / 2;
    const baseY = (1920 - rows * cs) / 2;
    this.mazeContainer.setPosition(baseX, baseY);

    // 플레이어 배치
    const st = this.logic.getStartPosition();
    this.playerCtrl.currentGridPos = cc.v2(st.x, st.y);
    this.playerCtrl.node.setPosition(
      cc.v2(
        baseX + st.x * cs + cs / 2,
        baseY + st.y * cs + cs / 2
      )
    );

    let goalSprite: cc.SpriteFrame;
    switch (GameData.playerType) {
      case "tiger":
        goalSprite = this.goalSongpyeon;
        break;
      case "dog":
        goalSprite = this.goalBone;
        break;
      case "rabbit":
        goalSprite = this.goalCarrot;
        break;
      default:
        goalSprite = this.goalSongpyeon; // 기본값(예: 호랑이용)
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

    this.uiMgr.setTimer(this.timeRem);
  }

  update(dt: number) {
    if (this.gameOver || !this.logic || !this.logic.maze) return;

    this.timeRem -= dt;
    if (this.timeRem <= 0) {
      this.gameOver = true;

      GameState.lastGameScene = cc.director.getScene().name;
      GameState.score = GameData.score;
      GameState.gameId = "MazeGame";

      if (this.gameOverUIPrefab) {
        const gameOverUI = cc.instantiate(this.gameOverUIPrefab);
        cc.find("Canvas/UI").addChild(gameOverUI);
        gameOverUI.setPosition(0, 0);

      } 
      // else {
      //   cc.director.loadScene("GameOver");
      // }

      return;
    }

    this.uiMgr.setTimer(this.timeRem);

    const cs = this.logic.cellSize;
    const cols = this.logic.maze[0].length;
    const rows = this.logic.maze.length;
    const baseX = (1080 - cols * cs) / 2;
    const baseY = (1920 - rows * cs) / 2;

    const go = this.logic.getGoalPosition();
    const goalWorld = cc.v2(
      baseX + go.x * cs + cs / 2,
      baseY + go.y * cs + cs / 2
    );
    if (this.playerCtrl.node.getPosition().sub(goalWorld).mag() < cs * 0.4) {
      this.gameOver = true;
      GameData.addScore(GameData.currentLevel);
      this.uiMgr.setScore(GameData.score);
      this.scheduleOnce(() => {
        this._startLevel(GameData.currentLevel + 1);
      }, 0);
    }
  }
}
