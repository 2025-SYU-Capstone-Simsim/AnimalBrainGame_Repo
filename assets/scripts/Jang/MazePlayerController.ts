const { ccclass, property } = cc._decorator;
import MazeLogic from "./MazeLogic";
import GameData from "./MazeGameData";

@ccclass
export default class PlayerController extends cc.Component {
  @property(cc.SpriteFrame) tigerFrame!: cc.SpriteFrame;
  @property(cc.SpriteFrame) dogFrame!: cc.SpriteFrame;
  @property(cc.SpriteFrame) rabbitFrame!: cc.SpriteFrame;

  public baseX: number = 0;
  public baseY: number = 0;
  public currentGridPos: cc.Vec2 = cc.v2(1, 1);
  public mazeLogic!: MazeLogic;

  private isMoving = false;
  private sprite!: cc.Sprite;

  private drawnPath: cc.Vec2[] = [];
  private drawingLine: cc.Graphics = null;
  private isDrawing: boolean = false;
  private visualPathPixels: cc.Vec2[] = [];
  private pathGrids: cc.Vec2[] = [];
  public resetPlayer(pos: cc.Vec2) {
  this.isMoving = false;
  this.pathGrids = [];
  this.visualPathPixels = [];
  if (this.drawingLine) this.drawingLine.clear();

  this.currentGridPos = pos.clone();
  this.node.setPosition(this.gridToWorld(pos));
}
  onLoad() {
    this.sprite = this.node.getComponent(cc.Sprite) || this.node.addComponent(cc.Sprite);
    switch (GameData.playerType) {
      case "tiger":
        this.sprite.spriteFrame = this.tigerFrame;
        break;
      case "dog":
        this.sprite.spriteFrame = this.dogFrame;
        break;
      case "rabbit":
        this.sprite.spriteFrame = this.rabbitFrame;
        break;
      default:
        this.sprite.spriteFrame = this.tigerFrame;
    }
    this.sprite.type = cc.Sprite.Type.SIMPLE;
    this.sprite.sizeMode = cc.Sprite.SizeMode.TRIMMED;
    this.node.setScale(1);
    this.node.setContentSize(50, 50);
    this.node.setAnchorPoint(0.5, 0.5);
    this.node.zIndex = 500;

    let graphicsNode = this.node.parent.getChildByName("PathGraphics");
    if (!graphicsNode) {
      graphicsNode = new cc.Node("PathGraphics");
      this.node.parent.addChild(graphicsNode, 999);
    }
    this.drawingLine = graphicsNode.getComponent(cc.Graphics) || graphicsNode.addComponent(cc.Graphics);

    const inputNode = this.node.parent;
    inputNode.on(cc.Node.EventType.TOUCH_START, this.onDrawStart, this);
    inputNode.on(cc.Node.EventType.TOUCH_MOVE, this.onDrawMove, this);
    inputNode.on(cc.Node.EventType.TOUCH_END, this.onDrawEnd, this);
  }

  onDestroy() {
    const inputNode = this.node.parent;
    inputNode.off(cc.Node.EventType.TOUCH_START, this.onDrawStart, this);
    inputNode.off(cc.Node.EventType.TOUCH_MOVE, this.onDrawMove, this);
    inputNode.off(cc.Node.EventType.TOUCH_END, this.onDrawEnd, this);
  }

  private gridToWorld(gridPos: cc.Vec2): cc.Vec2 {
    const cs = this.mazeLogic.cellSize;
    return cc.v2(
      this.baseX + gridPos.x * cs + cs / 2,
      this.baseY + gridPos.y * cs + cs / 2
    );
  }

  private screenToGrid(worldPos: cc.Vec2): cc.Vec2 {
  const cs = this.mazeLogic.cellSize;
  const gx = Math.floor((worldPos.x - this.baseX) / cs);
  const gy = Math.floor((worldPos.y - this.baseY) / cs);

  if (
    gx < 0 || gy < 0 ||
    gx >= this.mazeLogic.maze[0].length ||
    gy >= this.mazeLogic.maze.length
  ) {
    return this.currentGridPos.clone();
  }
  return cc.v2(gx, gy);
}
  private isValidGrid(gridPos: cc.Vec2): boolean {
    return (
      gridPos.x >= 0 &&
      gridPos.y >= 0 &&
      gridPos.x < this.mazeLogic.maze[0].length &&
      gridPos.y < this.mazeLogic.maze.length &&
      this.mazeLogic.isWalkable(gridPos.x, gridPos.y)
    );
  }

  private getLinePath(from: cc.Vec2, to: cc.Vec2): cc.Vec2[] {
    let result: cc.Vec2[] = [];
    let x0 = from.x, y0 = from.y, x1 = to.x, y1 = to.y;
    if (x0 === x1) {
      let dir = y1 > y0 ? 1 : -1;
      for (let y = y0 + dir; y !== y1 + dir; y += dir) {
        let next = cc.v2(x0, y);
        if (!this.isValidGrid(next)) break;
        result.push(next);
      }
    }
    else if (y0 === y1) {
      let dir = x1 > x0 ? 1 : -1;
      for (let x = x0 + dir; x !== x1 + dir; x += dir) {
        let next = cc.v2(x, y0);
        if (!this.isValidGrid(next)) break;
        result.push(next);
      }
    }
    return result;
  }

  private getManhattanPath(from: cc.Vec2, to: cc.Vec2): cc.Vec2[] {
    let mid1 = cc.v2(to.x, from.y);
    let mid2 = cc.v2(from.x, to.y);

    let firstPath = this.getLinePath(from, mid1).concat(this.getLinePath(mid1, to));
    let secondPath = this.getLinePath(from, mid2).concat(this.getLinePath(mid2, to));

    if (firstPath.length === Math.abs(to.x - from.x) + Math.abs(to.y - from.y)) return firstPath;
    if (secondPath.length === Math.abs(to.x - from.x) + Math.abs(to.y - from.y)) return secondPath;
    return [];
  }

  private onDrawStart(event: cc.Event.EventTouch) {
  if (!this.mazeLogic) return;   // mazeLogic 할당 전엔 무시
  if (this.isMoving) return;     // 이동중엔 무시
  this.drawingLine.clear();
  this.visualPathPixels = [];
  this.pathGrids = [];
  let startPixel = this.gridToWorld(this.currentGridPos);
  this.visualPathPixels.push(startPixel.clone());
  this.pathGrids.push(this.currentGridPos.clone());
  this.drawingLine.moveTo(startPixel.x, startPixel.y);
}

// ...생략 (onLoad 등 기존 코드 동일)...

private onDrawMove(event: cc.Event.EventTouch) {
  const worldPos = event.getLocation();
  let curGrid = this.screenToGrid(worldPos);
  let lastGrid = this.pathGrids[this.pathGrids.length - 1];

  if (!lastGrid.equals(curGrid)) {
    let path = this.sampleGridLine(lastGrid, curGrid);
    for (let cell of path) {
      if (!this.isValidGrid(cell)) break; // 벽 만나면 추가/그리기 X
      if (this.pathGrids.find(p => p.equals(cell))) continue;
      this.pathGrids.push(cell.clone());
      let pixel = this.gridToWorld(cell);
      this.visualPathPixels.push(pixel.clone());
      this.drawingLine.lineTo(pixel.x, pixel.y);
      this.drawingLine.strokeColor = cc.color(255,0,0,255);
      this.drawingLine.lineWidth = 6;
      this.drawingLine.stroke();
    }
  }
}

// 두 칸 사이에 모든 격자(벽 확인 포함) 반환 (브레젠험 라인 알고리즘)
private sampleGridLine(from: cc.Vec2, to: cc.Vec2): cc.Vec2[] {
  let result: cc.Vec2[] = [];
  let x0 = from.x, y0 = from.y, x1 = to.x, y1 = to.y;
  let dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
  let sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;
  let x = x0, y = y0;
  while (x !== x1 || y !== y1) {
    if (!(x === x0 && y === y0)) result.push(cc.v2(x, y));
    let e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x += sx; }
    if (e2 < dx) { err += dx; y += sy; }
  }
  result.push(cc.v2(x1, y1));
  return result;
}



  private onDrawEnd(event: cc.Event.EventTouch) {
  // pathGrids가 2칸 이상이면 이동 시작
  if (this.pathGrids.length > 1) {
    this.followPath([...this.pathGrids]);
  }
}

  private async followPath(path: cc.Vec2[]) {
    this.isMoving = true;
    for (let i = 1; i < path.length; i++) {
      await this.moveToGrid(path[i]);
    }
    this.isMoving = false;
    this.drawingLine.clear();
  }

  private moveToGrid(gridPos: cc.Vec2): Promise<void> {
    return new Promise(resolve => {
      const target = this.gridToWorld(gridPos);
      cc.Tween.stopAllByTarget(this.node);
      cc.tween(this.node)
        .to(0.12, { x: target.x, y: target.y })
        .call(() => {
          this.currentGridPos = gridPos.clone();
          resolve();
        })
        .start();
    });
  }
} 