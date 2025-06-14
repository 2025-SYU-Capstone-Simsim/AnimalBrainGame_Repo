import MazeMultiLogic from "./MazeMultiLogic";

export default class MazeMultiRenderer {
  private localContainer: cc.Node;
  private remoteContainer: cc.Node;
  private tilePrefab: cc.Prefab;
  private pathFrame: cc.SpriteFrame;
  private wallFrame: cc.SpriteFrame;

  private logic: MazeMultiLogic = null; // 좌표계 계산용

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

  /** MazeLogic 주입 (필드 위치 기준 좌표계 사용) */
  public setLogic(logic: MazeMultiLogic) {
    this.logic = logic;
  }

  /** 실제 렌더링 진입 함수 */
  public render(maze: number[][]) {
    cc.log("[DEBUG] 🧱 MazeMultiRenderer.render() 호출됨");
    cc.log("[DEBUG] maze 크기:", maze.length, "x", maze[0].length);

    if (this.localContainer) {
      cc.log("[DEBUG] 🟦 localContainer 렌더링 시작");
      this.renderMazeToContainer(this.localContainer, maze);
    }
    if (this.remoteContainer) {
      cc.log("[DEBUG] 🟥 remoteContainer 렌더링 시작");
      this.renderMazeToContainer(this.remoteContainer, maze);
    }
  }

  /** maze를 container 노드에 그려주는 함수 */
  private renderMazeToContainer(container: cc.Node, maze: number[][]) {
    container.removeAllChildren();

    const rows = maze.length;
    const cols = maze[0].length;

    // 셀 크기 계산
    const cellSize = Math.min(container.width / cols, container.height / rows);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const tile = cc.instantiate(this.tilePrefab);
        tile.setContentSize(cellSize, cellSize);
        tile.zIndex = 250;

        // 위치 계산 (logic 있으면 필드 offset 기준)
        const position = this.logic
          ? this.logic.gridToWorld(x, y)
          : cc.v2(
              -container.width / 2 + cellSize / 2 + x * cellSize,
              -container.height / 2 + cellSize / 2 + y * cellSize
            );

        tile.setPosition(position);

        const sprite = tile.getComponent(cc.Sprite);
        if (sprite) {
          sprite.spriteFrame = maze[y][x] === 1 ? this.wallFrame : this.pathFrame;
        }

        container.addChild(tile);
      }
    }
  }
}
