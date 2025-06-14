import MazeMultiGenerator from "./MazeMultiGenerator";

export interface GridPos {
  x: number;
  y: number;
}

export default class MazeMultiLogic {
  public maze: number[][] = [];
  public goalPos: GridPos = { x: 13, y: 13 };
  public playerPos: GridPos = { x: 1, y: 1 };
  public readonly rows: number;
  public readonly cols: number;

  private generator: MazeMultiGenerator;
  private fieldNode: cc.Node = null;

  constructor(rows: number = 15, cols: number = 15) {
    this.rows = rows;
    this.cols = cols;
    this.generator = new MazeMultiGenerator();
  }

  public setFieldNode(node: cc.Node) {
    this.fieldNode = node;
  }

  public generate(): void {
    this.maze = this.generator.generate(this.rows, this.cols);
    this.playerPos = { x: 1, y: 1 };
    this.goalPos = { x: this.cols - 2, y: this.rows - 2 };
  }

  public setMaze(mazeData: number[][]): void {
    this.maze = mazeData;
    this.playerPos = { x: 1, y: 1 };
    this.goalPos = { x: this.cols - 2, y: this.rows - 2 };
  }

  public getMaze(): number[][] {
    return this.maze;
  }

  public getGoalPosition(): GridPos {
    return this.goalPos;
  }

  public getStartPosition(): GridPos {
    return { x: 1, y: 1 };
  }

  public getPlayerPosition(): GridPos {
    return this.playerPos;
  }

  public gridToWorld(x: number, y: number): cc.Vec2 {
    const cellSize = 50;
    const worldX = x * cellSize + cellSize / 2 + this.getFieldOffsetX();
    const worldY = y * cellSize + cellSize / 2 + this.getFieldOffsetY();
    return cc.v2(worldX, worldY);
  }

  private getFieldOffsetX(): number {
    return this.fieldNode?.x ?? 0;
  }

  private getFieldOffsetY(): number {
    return this.fieldNode?.y ?? 0;
  }
}
