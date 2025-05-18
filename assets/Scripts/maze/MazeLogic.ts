import MazeGenerator from "./MazeGenerator";
import MazeRenderer from "./MazeRenderer";

export interface GridPos { x: number; y: number; }

export default class MazeLogic {
  private generator: MazeGenerator;
  private renderer: MazeRenderer;
  public maze: number[][] = [];
  private goalPos: GridPos = { x: 19, y: 19 };

  constructor(
    container: cc.Node,
    tilePrefab: cc.Prefab,
    pathFrame: cc.SpriteFrame,
    grassFrame: cc.SpriteFrame,
    public cellSize: number
  ) {
    this.generator = new MazeGenerator(21, 21);
    this.renderer = new MazeRenderer(
      container, tilePrefab, pathFrame, grassFrame, cellSize
    );
  }

  public build(level: number = 1) {
    this.maze = this.generator.generateMaze(level);
    this.renderer.render(this.maze);
    this.goalPos = { x: 19, y: 19 };
  }

  public isWalkable(x: number, y: number): boolean {
    return (
      x >= 0 && x < 21 &&
      y >= 0 && y < 21 &&
      this.maze[y][x] === 0
    );
  }

  public getStartPosition(): GridPos { return { x: 1, y: 1 }; }
  public getGoalPosition(): GridPos  { return this.goalPos; }
}
