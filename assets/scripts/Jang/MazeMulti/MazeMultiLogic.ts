// File: MazeMultiLogic.ts
import MazeMultiGenerator from "./MazeMultiGenerator";

export interface GridPos {
  x: number;
  y: number;
}

export default class MazeMultiLogic {
  public maze: number[][] = [];
  public goalPos: GridPos = { x: 13, y: 13 };
  public readonly rows: number;
  public readonly cols: number;

  private generator: MazeMultiGenerator;

  constructor(rows: number = 15, cols: number = 15) {
    this.rows = rows;
    this.cols = cols;
    this.generator = new MazeMultiGenerator();
  }

  /**
   * 호스트 전용 - 미로 생성
   * 미로는 0: 길, 1: 벽
   */
  public generate(): void {
    this.maze = this.generator.generate(this.rows, this.cols);
    this.goalPos = { x: this.cols - 2, y: this.rows - 2 };
  }

  /**
   * 게스트 전용 - 전달받은 미로 설정
   */
  public setMaze(mazeData: number[][]): void {
    this.maze = mazeData;
    this.goalPos = { x: this.cols - 2, y: this.rows - 2 };
  }

  public getMaze(): number[][] {
    return this.maze;
  }

  public getGoalPosition(): GridPos {
    return this.goalPos;
  }
}
