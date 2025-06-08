import MazeGenerator from "./MazeMultiGenerator";

export interface GridPos { x: number; y: number; }

export default class MazeMultiLogic {
  private generator: MazeGenerator;
  public maze: number[][] = [];
  private goalPos: GridPos;

  public readonly cellSize: number;

  constructor(public rows = 15, public cols = 15, cellSize = 53) {
    this.generator = new MazeGenerator(rows, cols);
    this.cellSize = cellSize;
    // Goal 위치를 행/열 크기에 맞게 동적으로 설정
    this.goalPos = { x: this.cols - 2, y: this.rows - 2 };
  }

  /**
   * level에 따라 미로를 생성하고 goalPos를 업데이트합니다.
   */
  public build(level: number = 1): void {
    this.maze = this.generator.generateMaze(level);
    this.goalPos = { x: this.cols - 2, y: this.rows - 2 };
  }

  /**
   * 주어진 좌표(x, y)가 그리드 범위 내에서 이동 가능한지 확인합니다.
   */
  public isWalkable(x: number, y: number): boolean {
    return (
      x >= 0 && x < this.cols &&
      y >= 0 && y < this.rows &&
      this.maze[y][x] === 0
    );
  }

  /** 시작 위치 반환 */
  public getStartPosition(): GridPos {
    return { x: 1, y: 1 };
  }

  /** 목표 위치 반환 */
  public getGoalPosition(): GridPos {
    return this.goalPos;
  }
}
