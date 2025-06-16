// /assets/Scripts/main/PlayerController.ts
const { ccclass, property } = cc._decorator;
import MazeLogic from "./MazeLogic";
import GameData from "./MazeGameData";
import GameState from "../Controller/CommonUI/GameState";

@ccclass
export default class PlayerController extends cc.Component {
  @property(cc.SpriteFrame) tigerFrame!: cc.SpriteFrame;
  @property(cc.SpriteFrame) dogFrame!: cc.SpriteFrame;
  @property(cc.SpriteFrame) rabbitFrame!: cc.SpriteFrame;

  // GameOver UI Prefab (원하지 않으면 주석 처리)
  @property(cc.Prefab) gameOverUIPrefab!: cc.Prefab;

  //────────────────────────────────────────
  // ① 시작 위치를 상수로 지정 (필요에 따라 변경)
  private readonly START_XY = cc.v2(1, 1);
  //────────────────────────────────────────

  public baseX: number = 0;
  public baseY: number = 0;
  public currentGridPos: cc.Vec2 = this.START_XY.clone();
  public mazeLogic!: MazeLogic;

  private isMoving = false;
  //private movedOnce = false;      // 한 번만 이동했는지 체크
  private gameOverShown = false;  // GameOver UI를 이미 띄웠는지 체크
  private sprite!: cc.Sprite;

  private drawnPath: cc.Vec2[] = [];
  private drawingLine: cc.Graphics = null!;
  private isDrawing: boolean = false;
  private visualPathPixels: cc.Vec2[] = [];
  private pathGrids: cc.Vec2[] = [];

  //────────────────────────────────────────
  // ② resetPlayer: 시작 위치(START_XY)로 되돌린 뒤, 상태 초기화
  public resetPlayer() {
    this.isMoving = false;
    //this.movedOnce = false;
    this.gameOverShown = false;
    this.pathGrids = [];
    this.visualPathPixels = [];
    if (this.drawingLine) this.drawingLine.clear();

    this.currentGridPos = this.START_XY.clone(); 
    this.node.setPosition(this.gridToWorld(this.START_XY));
  }
  //────────────────────────────────────────

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
    inputNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onDrawEnd, this);

    // ── 게임 시작 시, 플레이어를 시작 위치로 배치

  }

  onDestroy() {
    const inputNode = this.node.parent;
    inputNode.off(cc.Node.EventType.TOUCH_START, this.onDrawStart, this);
    inputNode.off(cc.Node.EventType.TOUCH_MOVE, this.onDrawMove, this);
    inputNode.off(cc.Node.EventType.TOUCH_END, this.onDrawEnd, this);
    inputNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onDrawEnd, this);
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

  // 🛠️ [핵심] 화면 위치 → mazeContainer 내부 상대 좌표로 변환
  const localPos = this.node.parent.convertToNodeSpaceAR(worldPos);

  const gx = Math.floor((localPos.x - this.baseX) / cs);
  const gy = Math.floor((localPos.y - this.baseY) / cs);

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
    if (!this.mazeLogic) return;
    if (this.isMoving) return;

    // ── (1) 이미 한 번 이동했거나 GameOver UI가 이미 떴다면 터치 무시
    if (this.gameOverShown) {
  return;  // movedOnce 제거
}

    // ── (2) 경로 그리기 초기화
    this.drawingLine.clear();
    this.visualPathPixels = [];
    this.pathGrids = [];

    // ── (3) 터치 위치를 그리드로 계산
    const worldPos = event.getLocation();
    const touchGrid = this.screenToGrid(worldPos);

    // ── (4) “터치한 칸”이 “플레이어가 있는 currentGridPos”와 다르면 리턴
    if (!touchGrid.equals(this.currentGridPos)) {
      return;
    }

    // ── (5) 현재 플레이어 위치 픽셀 좌표 → 첫 점으로 등록
    const startPixel = this.gridToWorld(this.currentGridPos);
    this.visualPathPixels.push(startPixel.clone());
    this.pathGrids.push(this.currentGridPos.clone());
    this.drawingLine.moveTo(startPixel.x, startPixel.y);
  }

  private onDrawMove(event: cc.Event.EventTouch) {
    if (this.isMoving) return;

    // ── (1) pathGrids가 비어 있거나 이미 GameOver 상태라면 무시
    if (this.pathGrids.length === 0 || this.gameOverShown) {
      return;
    }

    const worldPos = event.getLocation();
    const curGrid = this.screenToGrid(worldPos);
    const lastGrid = this.pathGrids[this.pathGrids.length - 1];

    if (this.pathGrids.length === 1 && lastGrid.equals(curGrid)) {
      return;
    }

    if (!lastGrid.equals(curGrid)) {
      const path = this.getManhattanPath(lastGrid, curGrid);
      if (path.length > 0) {
        for (let cell of path) {
          if (!this.isValidGrid(cell)) break;
          if (this.pathGrids.find(p => p.equals(cell))) continue;
          this.pathGrids.push(cell.clone());
          const pixel = this.gridToWorld(cell);
          this.visualPathPixels.push(pixel.clone());
          this.drawingLine.lineTo(pixel.x, pixel.y);
          this.drawingLine.strokeColor = cc.color(255, 0, 0, 255);
          this.drawingLine.lineWidth = 6;
          this.drawingLine.stroke();
        }
      }
    }
  }

  private onDrawEnd(event: cc.Event.EventTouch) {

   if (this.gameOverShown) {
  return;  
}

    // pathGrids가 2칸 이상이면 이동 시작
    if (this.pathGrids.length > 1) {
      this.followPath([...this.pathGrids]);
    }
  }

 // PlayerController.ts (골 감지 → emit만)
// PlayerController.ts 에서…
private async followPath(path: cc.Vec2[]) {
  this.isMoving = true;

  // ── (1) path 그리드 좌표를 월드 좌표(픽셀) 리스트로 변환
  this.visualPathPixels = path.map(cell => this.gridToWorld(cell));

  const goalGrid = this.mazeLogic.getGoalPosition();
  for (let i = 1; i < path.length; i++) {
    // ── (2) 한 칸 이동
    await this.moveToGrid(path[i]);

    // ── (3) 이동한 첫 픽셀 제거
    this.visualPathPixels.shift();

    // ── (4) 기존 선 모두 지우고, 남은 픽셀만 다시 그리기
    this.drawingLine.clear();
    if (this.visualPathPixels.length >= 2) {
      // 시작점
      const first = this.visualPathPixels[0];
      this.drawingLine.moveTo(first.x, first.y);
      // 나머지
      for (let j = 1; j < this.visualPathPixels.length; j++) {
        const p = this.visualPathPixels[j];
        this.drawingLine.lineTo(p.x, p.y);
      }
      this.drawingLine.strokeColor = cc.color(255, 0, 0, 255);
      this.drawingLine.lineWidth = 6;
      this.drawingLine.stroke();
    }

    // ── (5) 골 도착 체크 (기존 로직)
   if (
  this.currentGridPos.x === goalGrid.x &&
  this.currentGridPos.y === goalGrid.y
) {
  this.isMoving = false;
  this.drawingLine.clear();
  this.pathGrids = [];
  this.visualPathPixels = [];
  this.node.emit("playerReachedGoal");
  return;
}

// ── (6) 목표 미도달 시 다음 드래그 가능하게 초기화
this.isMoving = false;
this.drawingLine.clear();
this.pathGrids = [];
this.visualPathPixels = [];


  // ── (6) 목표 미도달 시 GameOver UI (기존 코드 유지)
}
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
