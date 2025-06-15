import MazeMultiLogic from "./MazeMultiLogic";
import MazeMultiRenderer from "./MazeMultiRenderer";
import GameState from "../../Controller/CommonUI/GameState";
import MazeMultiPlayerController from "./MazeMultiPlayerController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerMazeGameScene extends cc.Component {
  @property(cc.Node) playerField: cc.Node = null;
  @property(cc.Node) playerNode: cc.Node = null;
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

  public logic: MazeMultiLogic = null;
  public renderer: MazeMultiRenderer = null;
start() {
  const seed = GameState.isHost ? Date.now() % 100000 : 1234;

  this.logic = new MazeMultiLogic(15, 15, seed);
  this.logic.setFieldNode(this.playerField);

  this.renderer = new MazeMultiRenderer(
    this.playerField,
    null,
    this.tilePrefab,
    this.pathFrame,
    this.wallFrame,
  );

  const playerCtrl = this.getComponent(MazeMultiPlayerController);
  if (playerCtrl) {
    playerCtrl.setMazeLogic(this.logic); // ← 반드시 먼저 호출
    playerCtrl.baseX = this.playerField.x;
    playerCtrl.baseY = this.playerField.y;
  }
}

  startGame() {
    cc.log("[DEBUG] 🎮 PlayerMazeGameScene → startGame() 진입");

    if (GameState.isHost) {
      this.logic.generate();
      const maze = this.logic.getMaze();
      cc.log("[DEBUG] 🎮 생성된 Maze:", maze);

      this.renderer.render(maze);
      this.setGoalPosition();
      this.setPlayerStart();

      const roomId = GameState.createdRoomId;
      if (window.socket && roomId) {
        cc.log("[DEBUG] 🎮 Host가 maze-data emit:", maze);
        window.socket.emit("game-event", {
          type: "maze-data",
          roomId,
          payload: { maze },
        });
      }
    } else {
      cc.log("[DEBUG] 게스트는 applyMaze()로 처리됨");
    }
  }

  applyMaze(maze: number[][]) {
    cc.log("[DEBUG] 🧩 applyMaze() 호출됨", maze);
    this.logic.setMaze(maze);
    this.renderer.render(maze);
    this.setGoalPosition();
    this.setPlayerStart();
  }

  private setGoalPosition() {
    const goal = this.logic.getGoalPosition();
    const world = this.logic.gridToWorld(goal.x, goal.y);

    cc.log(`[DEBUG] 🎯 setGoalPosition: grid=(${goal.x}, ${goal.y}) → world=(${world.x}, ${world.y})`);

    this.goalNode.setPosition(world);
    this.goalNode.setContentSize(50, 50);
    this.goalNode.zIndex = 500;
    this.goalNode.active = true;

    const sprite = this.goalNode.getComponent(cc.Sprite);
    if (!sprite) return;

    switch (GameState.character) {
      case "rabbit": sprite.spriteFrame = this.goalCarrot; break;
      case "tiger":  sprite.spriteFrame = this.goalSongpyeon; break;
      case "dog":    sprite.spriteFrame = this.goalBone; break;
      default: cc.warn("[Goal] Unknown character type:", GameState.character);
    }
  }

  private setPlayerStart() {
    const start = this.logic.getStartPosition();
    const world = this.logic.gridToWorld(start.x, start.y);

    cc.log(`[DEBUG] 👤 setPlayerStart: grid=(${start.x}, ${start.y}) → world=(${world.x}, ${world.y})`);

    this.playerNode.setPosition(world);
    this.playerNode.setContentSize(50, 50);
    this.playerNode.zIndex = 300;
    this.playerNode.active = true;

    const sprite = this.playerNode.getComponent(cc.Sprite);
    if (!sprite) return;

    switch (GameState.character) {
      case "rabbit": sprite.spriteFrame = this.spriteRabbit; break;
      case "tiger":  sprite.spriteFrame = this.spriteTiger; break;
      case "dog":    sprite.spriteFrame = this.spriteDog; break;
      default: cc.warn("[Player] Unknown character:", GameState.character);
    }
  }

  public getLogic(): MazeMultiLogic {
    return this.logic;
  }
}
