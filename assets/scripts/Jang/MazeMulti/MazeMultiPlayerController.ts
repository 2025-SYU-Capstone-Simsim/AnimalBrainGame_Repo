import MazeMultiLogic, { GridPos } from "./MazeMultiLogic";
import GameState from "../../Controller/CommonUI/GameState";

const { ccclass, property } = cc._decorator;

declare global {
  interface Window {
    socket: any;
  }
}

@ccclass
export default class MazeMultiPlayerController extends cc.Component {
  @property(cc.Node) playerNode: cc.Node = null;

  public baseX = 0;
  public baseY = 0;
  public currentGridPos: cc.Vec2 = cc.v2(1, 1);
  public mazeLogic: MazeMultiLogic = null;

  private isMoving = false;
  private drawingLine: cc.Graphics = null;
  private pathGrids: cc.Vec2[] = [];
  private visualPathPixels: cc.Vec2[] = [];

  onLoad() {
    this.drawingLine = this.node.getComponent(cc.Graphics) || this.node.addComponent(cc.Graphics);

    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

   
  }

 public setMazeLogic(logic: MazeMultiLogic) {
  this.mazeLogic = logic;
  if (!logic) {
    cc.error("[MazeMultiPlayerController] setMazeLogic() → null이 전달됨");
  }
}


  public resetPlayer() {
    this.isMoving = false;
    this.pathGrids = [];
    this.visualPathPixels = [];
    this.drawingLine.clear();
  }

  private onTouchStart(event: cc.Event.EventTouch) {
    if (this.isMoving || !this.mazeLogic) return;
    this.resetPlayer();
    this.addGridFromTouch(event.getLocation());
  }

  private onTouchMove(event: cc.Event.EventTouch) {
    if (this.isMoving || !this.mazeLogic) return;
    this.addGridFromTouch(event.getLocation());
  }

  private onTouchEnd() {
    if (this.pathGrids.length > 1) {
      this.moveAlongPath();
    }
  }

  private addGridFromTouch(pos: cc.Vec2) {
    const localPos = this.node.convertToNodeSpaceAR(pos);
    const gridX = Math.floor((localPos.x - this.baseX) / 50);
    const gridY = Math.floor((localPos.y - this.baseY) / 50);
    const grid = cc.v2(gridX, gridY);

    if (!this.mazeLogic || 
        grid.x < 0 || grid.x >= this.mazeLogic.cols ||
        grid.y < 0 || grid.y >= this.mazeLogic.rows ||
        this.mazeLogic.maze[grid.y][grid.x] === 1
    ) return;

    const last = this.pathGrids[this.pathGrids.length - 1] || this.currentGridPos;
    if (!this.isAdjacentManhattan(last, grid)) return;

    this.pathGrids.push(grid);
    this.visualPathPixels.push(cc.v2(grid.x * 50 + this.baseX + 25, grid.y * 50 + this.baseY + 25));
    this.drawPath();
  }

  private isAdjacentManhattan(a: cc.Vec2, b: cc.Vec2): boolean {
    return (Math.abs(a.x - b.x) + Math.abs(a.y - b.y)) === 1;
  }

  private drawPath() {
    this.drawingLine.clear();
    this.drawingLine.lineWidth = 5;
    this.drawingLine.strokeColor = cc.Color.BLUE;
    this.drawingLine.moveTo(
      this.currentGridPos.x * 50 + this.baseX + 25,
      this.currentGridPos.y * 50 + this.baseY + 25
    );
    for (const p of this.visualPathPixels) {
      this.drawingLine.lineTo(p.x, p.y);
    }
    this.drawingLine.stroke();
  }

  private moveAlongPath() {
    this.isMoving = true;
    let i = 0;
    const moveNext = () => {
      if (i >= this.pathGrids.length) {
        this.isMoving = false;
        this.checkGoal();
        return;
      }
      const grid = this.pathGrids[i];
      const targetX = grid.x * 50 + this.baseX + 25;
      const targetY = grid.y * 50 + this.baseY + 25;
      const moveAction = cc.moveTo(0.15, cc.v2(targetX, targetY));
      this.playerNode.runAction(cc.sequence(
        moveAction,
        cc.callFunc(() => {
          this.currentGridPos = grid;

          const roomId = GameState.createdRoomId || GameState.incomingRoomId;
          if (window.socket && roomId) {
            window.socket.emit("game-event", {
              type: "opponent-move",
              roomId,
              payload: { x: grid.x, y: grid.y }
            });
          }

          i++;
          moveNext();
        })
      ));
    };
    moveNext();
  }

  private checkGoal() {
    const goal = this.mazeLogic.getGoalPosition();
    if (this.currentGridPos.x === goal.x && this.currentGridPos.y === goal.y) {
      cc.log("🎯 골 도달!");
      const roomId = GameState.createdRoomId || GameState.incomingRoomId;
      if (window.socket && roomId) {
        window.socket.emit("game-event", {
          type: "player-reached-goal",
          roomId,
          payload: {
            nickname: GameState.nickname,
            character: GameState.character
          }
        });
      }
      cc.director.emit("player-reached-goal", {
        nickname: GameState.nickname,
        character: GameState.character
      });
    }
  }
}
