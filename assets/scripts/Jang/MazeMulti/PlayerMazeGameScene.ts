import MazeMultiLogic from "./MazeMultiLogic";
import MazeMultiRenderer from "./MazeMultiRenderer";
import GameState from "../../Controller/CommonUI/GameState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerMazeGameScene extends cc.Component {
  @property(cc.Node) playerField: cc.Node = null;
  @property(cc.Node) playerNode: cc.Node = null;
  @property(cc.Node) goalNode: cc.Node = null;

  @property(cc.Prefab) tilePrefab: cc.Prefab = null;
  @property(cc.SpriteFrame) wallFrame: cc.SpriteFrame = null;
  @property(cc.SpriteFrame) pathFrame: cc.SpriteFrame = null;

  public logic: MazeMultiLogic = null;
  public renderer: MazeMultiRenderer = null;

  start() {
    this.logic = new MazeMultiLogic(15, 15);
    this.renderer = new MazeMultiRenderer(
      this.playerField,
      null,
      this.tilePrefab,
      this.pathFrame,
      this.wallFrame,
      50
    );
  }

 public startGame() {
  if (GameState.isHost) {
    this.logic.generate();
    const maze = this.logic.getMaze();

    this.renderer.render(maze);
    this.setGoalPosition();
    this.setPlayerStart();

    const roomId = GameState.createdRoomId;
    if (window.socket && roomId) {
      cc.log("[호스트] maze-data emit:", maze);
      window.socket.emit("game-event", {
        type: "maze-data",
        roomId,
        payload: { maze }
      });
    }
  } else {
    cc.log("[PlayerMazeGameScene] 게스트는 maze-data 수신 후 applyMaze()로 처리");
  }
}


  public applyMaze(maze: number[][]) {
    this.logic.setMaze(maze);
    this.renderer.render(maze);
    this.setGoalPosition();
    this.setPlayerStart();
  }

  private setGoalPosition() {
    const goal = this.logic.getGoalPosition();
    const posX = goal.x * 50 + 25 + this.playerField.x;
    const posY = goal.y * 50 + 25 + this.playerField.y;
    this.goalNode.setPosition(posX, posY);
    this.goalNode.setContentSize(50, 50);
    this.goalNode.zIndex = 500;
    this.goalNode.active = true;
  }

  private setPlayerStart() {
    this.playerNode.setPosition(
      this.playerField.x + 50 + 25,
      this.playerField.y + 50 + 25
    );
    this.playerNode.setContentSize(50, 50);
    this.playerNode.zIndex = 300;
    this.playerNode.active = true;
  }

  public getLogic(): MazeMultiLogic {
    return this.logic;
  }
}
