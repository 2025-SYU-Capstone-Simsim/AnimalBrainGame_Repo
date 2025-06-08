// /assets/Scripts/logic/MazeMultiRenderer.ts
// (기존 MazeMultiRenderer.ts를 대체)

const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiRenderer {
  constructor(
    private localContainer: cc.Node,
    private remoteContainer: cc.Node,
    private tilePrefab: cc.Prefab,
    private pathFrame: cc.SpriteFrame,
    private grassFrame: cc.SpriteFrame,
    private cellSize: number
  ) {}

  /** 
   * 단일 컨테이너에 미로를 그립니다.
   */
  private renderSingle(container: cc.Node, maze: number[][]): void {
    container.removeAllChildren();  // 이전 타일 전부 삭제
    for (let y = 0; y < maze.length; y++) {
      for (let x = 0; x < maze[y].length; x++) {
        const tile = cc.instantiate(this.tilePrefab);
        tile.parent = container;
        // 타일 중앙 정렬
        tile.setPosition(
          x * this.cellSize + this.cellSize / 2,
          y * this.cellSize + this.cellSize / 2
        );
        tile.setContentSize(this.cellSize, this.cellSize);

        const spr = tile.getComponent(cc.Sprite)!;
        spr.spriteFrame = maze[y][x] === 0
          ? this.pathFrame
          : this.grassFrame;
      }
    }
  }

  /**
   * 로컬/원격 미로를 동시에 렌더링
   * @param localMaze   내 화면용 2D 미로 배열
   * @param remoteMaze  상대 화면용 2D 미로 배열
   */
  public render(localMaze: number[][], remoteMaze: number[][]): void {
    this.renderSingle(this.localContainer, localMaze);
    this.renderSingle(this.remoteContainer, remoteMaze);
  }

  /** 양쪽 컨테이너 모두 비웁니다. */
  public clearAll(): void {
    this.localContainer.removeAllChildren();
    this.remoteContainer.removeAllChildren();
  }
}
