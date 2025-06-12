// File: OpponentMazeViewer.ts

import MazeMultiRenderer from "./MazeMultiRenderer";
import MazeMultiLogic from "./MazeMultiLogic";
import GameState from "../../Controller/CommonUI/GameState";

const { ccclass, property } = cc._decorator;

@ccclass
export default class OpponentMazeViewer extends cc.Component {
  @property(cc.Node) guestField: cc.Node = null;
  @property(cc.Node) opponentNode: cc.Node = null;    // ← 캐릭터 이동 노드
  @property(cc.Node) goalNode: cc.Node = null;        // ← 도착 노드

  @property(cc.Prefab) tilePrefab: cc.Prefab = null;
  @property(cc.SpriteFrame) wallFrame: cc.SpriteFrame = null;
  @property(cc.SpriteFrame) pathFrame: cc.SpriteFrame = null;

  private logic: MazeMultiLogic = null;
  private renderer: MazeMultiRenderer = null;

  onLoad() {
    this.logic = new MazeMultiLogic(15, 15);
    this.renderer = new MazeMultiRenderer(
      null, // localContainer 없음
      this.guestField,
      this.tilePrefab,
      this.pathFrame,
      this.wallFrame,
      50
    );

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
    const x = 1 * 50 + 25 + this.guestField.x;
    const y = 1 * 50 + 25 + this.guestField.y;
    this.opponentNode.setPosition(x, y);
    this.opponentNode.setContentSize(50, 50);
    this.opponentNode.zIndex = 300;
    this.opponentNode.active = true;
  }

  private setGoal() {
    const goal = this.logic.getGoalPosition();
    const posX = goal.x * 50 + 25 + this.guestField.x;
    const posY = goal.y * 50 + 25 + this.guestField.y;
    this.goalNode.setPosition(posX, posY);
    this.goalNode.setContentSize(50, 50);
    this.goalNode.zIndex = 500;
    this.goalNode.active = true;
  }

  public onOpponentMoved(pos: { x: number; y: number })  {
    const px = pos.x * 50 + 25 + this.guestField.x;
    const py = pos.y * 50 + 25 + this.guestField.y;
    this.opponentNode.setPosition(px, py);
  }

  onDestroy() {
    cc.director.off("maze-data", this.onMazeReceived, this);
    cc.director.off("update-opponent-position", this.onOpponentMoved, this);
  }
}
