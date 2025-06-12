import { GridPos } from "./MazeMultiLogic";

export default class MazeMultiGenerator {
  public generate(rows: number, cols: number): number[][] {
    const maze = Array.from({ length: rows }, () =>
      Array(cols).fill(1)
    );
    const visited = Array.from({ length: rows }, () =>
      Array(cols).fill(false)
    );

    const isInBounds = (x: number, y: number) =>
      x > 0 && x < cols - 1 && y > 0 && y < rows - 1;

    const dirs = [
      { x: 0, y: -2 },
      { x: 0, y: 2 },
      { x: -2, y: 0 },
      { x: 2, y: 0 }
    ];

    const visitCell = (x: number, y: number) => {
      visited[y][x] = true;
      maze[y][x] = 0;
    };

    const hasUnvisitedNeighbor = (x: number, y: number) => {
      return dirs.some(d => {
        const nx = x + d.x;
        const ny = y + d.y;
        return isInBounds(nx, ny) && !visited[ny][nx];
      });
    };

    const randomWalk = (startX: number, startY: number) => {
      const stack: GridPos[] = [{ x: startX, y: startY }];
      visitCell(startX, startY);

      while (stack.length > 0) {
        const current = stack[stack.length - 1];
        const neighbors = dirs
          .map(d => ({ x: current.x + d.x, y: current.y + d.y, dir: d }))
          .filter(n =>
            isInBounds(n.x, n.y) && !visited[n.y][n.x]
          );

        if (neighbors.length > 0) {
          const next = neighbors[Math.floor(Math.random() * neighbors.length)];
          const betweenX = (current.x + next.x) / 2;
          const betweenY = (current.y + next.y) / 2;

          maze[betweenY][betweenX] = 0;
          visitCell(next.x, next.y);
          stack.push({ x: next.x, y: next.y });
        } else {
          stack.pop();
        }
      }
    };

    // 1단계: 랜덤 워크
    randomWalk(1, 1);

    // 2단계: 헌트
    for (let y = 1; y < rows; y += 2) {
      for (let x = 1; x < cols; x += 2) {
        if (!visited[y][x] && hasUnvisitedNeighbor(x, y)) {
          const neighbors = dirs
            .map(d => ({ x: x + d.x, y: y + d.y }))
            .filter(n => isInBounds(n.x, n.y) && visited[n.y][n.x]);

          if (neighbors.length > 0) {
            const chosen = neighbors[Math.floor(Math.random() * neighbors.length)];
            const betweenX = (x + chosen.x) / 2;
            const betweenY = (y + chosen.y) / 2;

            maze[betweenY][betweenX] = 0;
            randomWalk(x, y);
          }
        }
      }
    }

    return maze;
  }
}
