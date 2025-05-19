<<<<<<< Updated upstream
const { ccclass, property } = cc._decorator;

@ccclass
export default class MazeLogic {
  // 에디터에서 연결할 프리팹 & 스프라이트
  @property(cc.Prefab)            tilePrefab: cc.Prefab      = null;
  @property(cc.SpriteFrame)       pathFrame: cc.SpriteFrame  = null;
  @property(cc.SpriteFrame)       grassFrame: cc.SpriteFrame = null;

  private rows: number;
  private cols: number;
  private maze: number[][] = [];
  private container: cc.Node;

  // 셀 크기 (픽셀)
  public cellSize: number = 50;

  constructor(rows: number, cols: number, container: cc.Node) {
    this.rows = rows;
    this.cols = cols;
    this.container = container;
  }

  public generateMaze(level: number): void {
    // (기존 DFS + addLoops 그대로)
    this.maze = Array.from({ length: this.rows }, () => Array(this.cols).fill(1));
    const stack: { x: number; y: number }[] = [];
    this.maze[1][1] = 0;
    stack.push({ x: 1, y: 1 });
    while (stack.length) {
      const cur = stack.pop()!;
      const neighbors = this.getUnvisitedNeighbors(cur.x, cur.y);
      if (neighbors.length) {
        stack.push(cur);
        const next = neighbors[Math.floor(Math.random() * neighbors.length)];
        this.maze[next.y][next.x] = 0;
        this.maze[(cur.y + next.y) / 2][(cur.x + next.x) / 2] = 0;
        stack.push(next);
      }
    }
    const loopProb = level >= 6 ? 0.05 : 0.03;
    this.addLoops(loopProb);
  }

  private addLoops(prob: number): void {
    for (let y = 1; y < this.rows - 1; y++) {
      for (let x = 1; x < this.cols - 1; x++) {
        if (this.maze[y][x] === 1 && Math.random() < prob) {
          let cnt = 0;
          if (this.maze[y - 1][x] === 0) cnt++;
          if (this.maze[y + 1][x] === 0) cnt++;
          if (this.maze[y][x - 1] === 0) cnt++;
          if (this.maze[y][x + 1] === 0) cnt++;
          if (cnt === 1) this.maze[y][x] = 0;
        }
      }
    }
  }

  /** 타일(prefab) 인스턴스화해서 오솔길/풀숲 이미지로 렌더링 */
  public renderMaze(): void {
    this.container.removeAllChildren();
  
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        const tile = cc.instantiate(this.tilePrefab);
        tile.parent = this.container;
  
        // → 꼭 이 두 줄을 추가하세요 ←
        tile.setContentSize(this.cellSize, this.cellSize);
        tile.getComponent(cc.Sprite)!.type = cc.Sprite.Type.SIMPLE;
  
        // 스프라이트 프레임
        const sp = tile.getComponent(cc.Sprite)!;
        sp.spriteFrame = this.maze[y][x] === 0
          ? this.pathFrame
          : this.grassFrame;
  
        // 위치
        tile.setPosition(
          x * this.cellSize + this.cellSize / 2,
          y * this.cellSize + this.cellSize / 2
        );
      }
    }
  }
  

  public getStartPosition() { return { x: 1, y: 1 }; }
  public getGoalPosition()  { return { x: this.cols - 2, y: this.rows - 2 }; }

  public isWalkable(cell: { x: number; y: number }): boolean {
    if (cell.x < 0 || cell.x >= this.cols || cell.y < 0 || cell.y >= this.rows) return false;
    return this.maze[cell.y][cell.x] === 0;
  }

  private getUnvisitedNeighbors(x: number, y: number): { x: number; y: number }[] {
    const list: { x: number; y: number }[] = [];
    if (x - 2 >= 0 && this.maze[y][x - 2] === 1) list.push({ x: x - 2, y });
    if (x + 2 < this.cols && this.maze[y][x + 2] === 1) list.push({ x: x + 2, y });
    if (y - 2 >= 0 && this.maze[y - 2][x] === 1) list.push({ x, y: y - 2 });
    if (y + 2 < this.rows && this.maze[y + 2][x] === 1) list.push({ x, y: y + 2 });
    return list;
  }
}
=======
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

// MazeLogic.ts
export default class MazeLogic {
    private rows: number;
    private cols: number;
    private maze: number[][] = [];
    public cellSize: number = 50;  //각셀 50픽셀 

    private container: cc.Graphics;

    constructor(rows: number, cols: number, container: cc.Node) {
        this.rows = rows;
        this.cols = cols;
        // cc.Graphics 추가가
        this.container = container.getComponent(cc.Graphics);
        if (!this.container) {
            this.container = container.addComponent(cc.Graphics);
        }
    }

    generateMaze() {
        // 벽으로채운 2차원 배열 생성
        this.maze = Array.from({ length: this.rows }, () =>
            Array(this.cols).fill(1)
        );

        const stack: { x: number; y: number }[] = [];
        // 시작점을 (1, 1)로 지정
        const startX = 1;
        const startY = 1;
        this.maze[startY][startX] = 0;
        stack.push({ x: startX, y: startY });

        while (stack.length > 0) {
            const current = stack.pop()!;
            const neighbors = this.getUnvisitedNeighbors(current.x, current.y);
            if (neighbors.length > 0) {
                stack.push(current);
                const next = neighbors[Math.floor(Math.random() * neighbors.length)];
                this.maze[next.y][next.x] = 0;
                // 두 셀 사이의 벽(중간 셀) 제거????
                const wallX = (current.x + next.x) / 2;
                const wallY = (current.y + next.y) / 2;
                this.maze[wallY][wallX] = 0;
                stack.push(next);
            }
        }
    }

    renderMaze() {
        this.container.clear();

        // 전체 미로 오솔길 : 갈색
        const pathColor = cc.color(205, 133, 63);  
        this.container.fillColor = pathColor;
        this.container.rect(0, 0, this.cols * this.cellSize, this.rows * this.cellSize);
        this.container.fill();

        // 벽만 녹색 칠하기
        const bushColor = cc.color(34, 139, 34);  
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.maze[y][x] === 1) {
                    this.container.fillColor = bushColor;
                    this.container.rect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
                    this.container.fill();

                    // 3. 각 벽 셀의 경계를 얇은 선으로 그림
                    // 선 두께를 0.5로 설정해 보세요 (지원되지 않으면 1을 사용)
                    this.container.lineWidth = 1;
                    this.container.strokeColor = cc.Color.WHITE;
                    const rx = x * this.cellSize;
                    const ry = y * this.cellSize;
                    const w = this.cellSize;
                    const h = this.cellSize;
                    this.container.moveTo(rx, ry);
                    this.container.lineTo(rx + w, ry);
                    this.container.lineTo(rx + w, ry + h);
                    this.container.lineTo(rx, ry + h);
                    this.container.lineTo(rx, ry);
                    this.container.stroke();
                }
            }
        }
    }

    getStartPosition() {
        return { x: 1, y: 1 };
    }

    getGoalPosition() {
        return { x: this.cols - 2, y: this.rows - 2 };
    }
//플레이어 미로 벽충돌 로직직
    public isWalkable(cell: { x: number; y: number }): boolean {
        if (cell.x < 0 || cell.x >= this.cols || cell.y < 0 || cell.y >= this.rows) {
            return false;
        }
        return this.maze[cell.y][cell.x] === 0;
    }

    private getUnvisitedNeighbors(x: number, y: number): { x: number; y: number }[] {
        const neighbors: { x: number; y: number }[] = [];
        if (x > 1 && this.maze[y][x - 2] === 1) neighbors.push({ x: x - 2, y: y });
        if (x < this.cols - 2 && this.maze[y][x + 2] === 1) neighbors.push({ x: x + 2, y: y });
        if (y > 1 && this.maze[y - 2][x] === 1) neighbors.push({ x: x, y: y - 2 });
        if (y < this.rows - 2 && this.maze[y + 2][x] === 1) neighbors.push({ x: x, y: y + 2 });
        return neighbors;
    }
}
>>>>>>> Stashed changes
