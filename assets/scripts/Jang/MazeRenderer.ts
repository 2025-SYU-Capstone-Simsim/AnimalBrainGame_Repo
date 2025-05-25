export default class MazeRenderer {
  constructor(
    private container: cc.Node,
    private tilePrefab: cc.Prefab,
    private pathFrame: cc.SpriteFrame,
    private grassFrame: cc.SpriteFrame,
    private cellSize: number
  ) {}

  public render(maze: number[][]) {
    this.container.removeAllChildren();
    const rows = maze.length, cols = maze[0].length;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const node = cc.instantiate(this.tilePrefab);
        node.setPosition(cc.v2(
  x * this.cellSize + this.cellSize / 2,
  y * this.cellSize + this.cellSize / 2
));
        node.setContentSize(this.cellSize, this.cellSize);
        const sp = node.getComponent(cc.Sprite)!;
        sp.type = cc.Sprite.Type.SIMPLE;
        sp.spriteFrame = maze[y][x] === 0 ? this.pathFrame : this.grassFrame;
        this.container.addChild(node);
      }
    }
  }
}
