import MazeMultiLogic from "./MazeMultiLogic";

export default class MazeMultiRenderer {
  private localContainer: cc.Node;
  private remoteContainer: cc.Node;
  private tilePrefab: cc.Prefab;
  private pathFrame: cc.SpriteFrame;
  private wallFrame: cc.SpriteFrame;
  private cellSize: number;

  private logic: MazeMultiLogic = null;

  constructor(
    localContainer: cc.Node,
    remoteContainer: cc.Node,
    tilePrefab: cc.Prefab,
    pathFrame: cc.SpriteFrame,
    wallFrame: cc.SpriteFrame,
    cellSize: number = 50
  ) {
    this.localContainer = localContainer;
    this.remoteContainer = remoteContainer;
    this.tilePrefab = tilePrefab;
    this.pathFrame = pathFrame;
    this.wallFrame = wallFrame;
    this.cellSize = cellSize;
  }

  public setLogic(logic: MazeMultiLogic) {
    this.logic = logic;
  }

  public setLocalContainer(node: cc.Node) {
    this.localContainer = node;
  }

  public setRemoteContainer(node: cc.Node) {
    this.remoteContainer = node;
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

    for (let y = 0; y < maze.length; y++) {
      for (let x = 0; x < maze[y].length; x++) {
        const tile = cc.instantiate(this.tilePrefab);
        tile.setContentSize(this.cellSize, this.cellSize);

        tile.setPosition(
          x * this.cellSize + this.cellSize / 2,
          y * this.cellSize + this.cellSize / 2
        );

        const sprite = tile.getComponent(cc.Sprite);
        if (sprite) {
          sprite.spriteFrame = maze[y][x] === 1 ? this.wallFrame : this.pathFrame;
        }

        container.addChild(tile);
      }
    }
  }
}