import MazeMultiRenderer from "./MazeMultiRenderer";
import MazeMultiLogic from "./MazeMultiLogic";
import GameState from "../../Controller/CommonUI/GameState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class OpponentMazeViewer extends cc.Component {
  @property(cc.Node) guestField: cc.Node = null;
  @property(cc.Node) opponentNode: cc.Node = null;
  @property(cc.Node) goalNode: cc.Node = null;

  @property(cc.Prefab) tilePrefab: cc.Prefab = null;
  @property(cc.SpriteFrame) wallFrame: cc.SpriteFrame = null;
  @property(cc.SpriteFrame) pathFrame: cc.SpriteFrame = null;

  @property(cc.SpriteFrame) goalCarrot: cc.SpriteFrame = null;
  @property(cc.SpriteFrame) goalSongpyeon: cc.SpriteFrame = null;
  @property(cc.SpriteFrame) goalBone: cc.SpriteFrame = null;

  @property(cc.SpriteFrame) spriteRabbit: cc.SpriteFrame = null;
  @property(cc.SpriteFrame) spriteTiger: cc.SpriteFrame = null;
  @property(cc.SpriteFrame) spriteDog: cc.SpriteFrame = null;

  private logic: MazeMultiLogic = null;
  private renderer: MazeMultiRenderer = null;

  onLoad() {
    // ✅ 로직 & 렌더러 설정
    this.logic = new MazeMultiLogic(15, 15);
    this.logic.setFieldNode(this.guestField);

    this.renderer = new MazeMultiRenderer(
      null,
      this.guestField,
      this.tilePrefab,
      this.pathFrame,
      this.wallFrame,
    );

    // ✅ 이벤트 리스너 등록
    cc.director.on("maze-data", this.onMazeReceived, this);
    cc.director.on("update-opponent-position", this.onOpponentMoved, this);
  }

  private onMazeReceived(data: { maze: number[][] }) {
    this.logic.setMaze(data.maze);
    this.renderer.render(this.logic.getMaze());

    this.setGoal();
    this.setOpponentStart();

    cc.log("[뷰어] maze-data 수신 및 guestField 렌더링 완료");
  }

  private setOpponentStart() {
    const start = this.logic.getStartPosition();
    const world = this.logic.gridToWorld(start.x, start.y);

    this.opponentNode.setPosition(world);
    this.opponentNode.setContentSize(50, 50);
    this.opponentNode.zIndex = 300;
    this.opponentNode.active = true;

    const character = GameState.isHost ? GameState.guestCharacter : GameState.hostCharacter;
    const sprite = this.opponentNode.getComponent(cc.Sprite);
    if (!sprite) return;

    switch (character) {
      case "rabbit":
        sprite.spriteFrame = this.spriteRabbit;
        break;
      case "tiger":
        sprite.spriteFrame = this.spriteTiger;
        break;
      case "dog":
        sprite.spriteFrame = this.spriteDog;
        break;
      default:
        cc.warn("[Opponent] Unknown character:", character);
    }
  }

  private setGoal() {
    const goal = this.logic.getGoalPosition();
    const world = this.logic.gridToWorld(goal.x, goal.y);

    this.goalNode.setPosition(world);
    this.goalNode.setContentSize(50, 50);
    this.goalNode.zIndex = 500;
    this.goalNode.active = true;

    const character = GameState.isHost ? GameState.guestCharacter : GameState.hostCharacter;
    const sprite = this.goalNode.getComponent(cc.Sprite);
    if (!sprite) return;

    switch (character) {
      case "rabbit":
        sprite.spriteFrame = this.goalCarrot;
        break;
      case "tiger":
        sprite.spriteFrame = this.goalSongpyeon;
        break;
      case "dog":
        sprite.spriteFrame = this.goalBone;
        break;
      default:
        cc.warn("[Goal] Unknown character type:", character);
    }
  }

  public onOpponentMoved(pos: { x: number; y: number }) {
    const world = this.logic.gridToWorld(pos.x, pos.y);
    this.opponentNode.setPosition(world);
  }

  onDestroy() {
    cc.director.off("maze-data", this.onMazeReceived, this);
    cc.director.off("update-opponent-position", this.onOpponentMoved, this);
  }
}
