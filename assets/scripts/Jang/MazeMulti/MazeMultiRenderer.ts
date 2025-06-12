// File: MazeMultiRenderer.ts

export default class MazeMultiRenderer {
  private localContainer: cc.Node;
  private remoteContainer: cc.Node;
  private tilePrefab: cc.Prefab;
  private pathFrame: cc.SpriteFrame;
  private wallFrame: cc.SpriteFrame;

  constructor(
    localContainer: cc.Node,
    remoteContainer: cc.Node,
    tilePrefab: cc.Prefab,
    pathFrame: cc.SpriteFrame,
    wallFrame: cc.SpriteFrame
  ) {
    this.localContainer = localContainer;
    this.remoteContainer = remoteContainer;
    this.tilePrefab = tilePrefab;
    this.pathFrame = pathFrame;
    this.wallFrame = wallFrame;
  }

  public render(maze: number[][]) {
    if (this.localContainer) {
      this.renderMazeToContainer(this.localContainer, maze);
    }
    if (this.remoteContainer) {
      this.renderMazeToContainer(this.remoteContainer, maze);
    }
  }

  private renderMazeToContainer(container: cc.Node, maze: number[][]) {
    container.removeAllChildren();

    const rows = maze.length;
    const cols = maze[0].length;
    // Field 크기에 맞춰 한 칸 크기 계산
    const cellSize = Math.min(container.width / cols, container.height / rows);

    // 좌표계: container의 (0,0)이 중앙이 되도록
    const startX = -container.width  / 2 + cellSize / 2;
    const startY = -container.height / 2 + cellSize / 2;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const tile = cc.instantiate(this.tilePrefab);
        tile.setContentSize(cellSize, cellSize);
        tile.setPosition(
          startX + x * cellSize,
          startY + y * cellSize
        );
        tile.zIndex = 250;

        const sprite = tile.getComponent(cc.Sprite);
        if (sprite) {
          sprite.spriteFrame =
            maze[y][x] === 1 ? this.wallFrame : this.pathFrame;
        }

        container.addChild(tile);
      }
    }
  }
}
