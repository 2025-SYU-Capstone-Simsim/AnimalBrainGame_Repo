export interface GridPos { x: number; y: number; }

export default class MazeGenerator {
  private rows: number = 21;
  private cols: number = 21;

  constructor(rows?: number, cols?: number) {
    // rows, cols 무시: 항상 21x21
  }

  public generateMaze(level: number): number[][] {
    let maze: number[][];
    if (level <= 4) {
      maze = this._dfs();
    } else if (level <= 10) {
      maze = this._huntAndKill();
    } else {
      maze = this._wilson();
    }
    maze = this._addLoops(maze, level);
    maze = this._ensureMinPath(maze, level);
    return maze;
  }

  private _dfs(): number[][] {
    const maze = Array(this.rows).fill(0).map(() => Array(this.cols).fill(1));
    const stack: GridPos[] = [{ x: 1, y: 1 }];
    maze[1][1] = 0;
    while (stack.length) {
      const cur = stack[stack.length - 1];
      const neighs = this._cellNeighbors(cur.x, cur.y, maze);
      if (!neighs.length) {
        stack.pop();
        continue;
      }
      const next = neighs[Math.floor(Math.random() * neighs.length)];
      const mx = (cur.x + next.x) >> 1, my = (cur.y + next.y) >> 1;
      maze[my][mx] = maze[next.y][next.x] = 0;
      stack.push(next);
    }
    return maze;
  }

  private _huntAndKill(): number[][] {
    const maze = Array(this.rows).fill(0).map(() => Array(this.cols).fill(1));
    const visited = Array(this.rows).fill(0).map(() => Array(this.cols).fill(false));
    let current: GridPos = { x: 1, y: 1 };
    visited[1][1] = true;
    maze[1][1] = 0;
    const dirs = [
      { dx:  0, dy:  2 },
      { dx:  2, dy:  0 },
      { dx:  0, dy: -2 },
      { dx: -2, dy:  0 },
    ];

    while (true) {
      const unvis = dirs
        .map(d => ({ x: current.x + d.dx, y: current.y + d.dy, d }))
        .filter(p =>
          p.x > 0 && p.x < this.cols-1 &&
          p.y > 0 && p.y < this.rows-1 &&
          !visited[p.y][p.x]
        );
      if (unvis.length > 0) {
        const pick = unvis[Math.floor(Math.random() * unvis.length)];
        const mx = current.x + pick.d.dx / 2;
        const my = current.y + pick.d.dy / 2;
        maze[my][mx] = 0;
        maze[pick.y][pick.x] = 0;
        visited[pick.y][pick.x] = true;
        current = { x: pick.x, y: pick.y };
        continue;
      }

      let found = false;
      for (let y = 1; y < this.rows; y += 2) {
        for (let x = 1; x < this.cols; x += 2) {
          if (!visited[y][x]) {
            const adj = dirs
              .map(d => ({ x: x + d.dx, y: y + d.dy, d }))
              .filter(p =>
                p.x > 0 && p.x < this.cols-1 &&
                p.y > 0 && p.y < this.rows-1 &&
                visited[p.y][p.x]
              );
            if (adj.length > 0) {
              const pick = adj[Math.floor(Math.random() * adj.length)];
              const mx = x + pick.d.dx / 2;
              const my = y + pick.d.dy / 2;
              maze[my][mx] = 0;
              maze[y][x] = 0;
              visited[y][x] = true;
              current = { x, y };
              found = true;
              break;
            }
          }
        }
        if (found) break;
      }
      if (!found) break;
    }
    return maze;
  }

  private _wilson(): number[][] {
  const maze = Array(this.rows).fill(0).map(() => Array(this.cols).fill(1));
  // 항상 홀수 좌표(통로 후보)만 사용한다고 가정
  // 1. 시작점 하나 랜덤 선택 → 방문 처리
  const visited = Array(this.rows).fill(0).map(() => Array(this.cols).fill(false));
  let unvisited: [number, number][] = [];
  for (let y = 1; y < this.rows; y += 2) {
    for (let x = 1; x < this.cols; x += 2) {
      unvisited.push([x, y]);
    }
  }
  // 임의 시작점 방문
  const [startX, startY] = unvisited.splice(Math.floor(Math.random() * unvisited.length), 1)[0];
  maze[startY][startX] = 0;
  visited[startY][startX] = true;

  while (unvisited.length > 0) {
    // 2. 랜덤 미방문 셀에서 출발, loop-erased random walk!
    let [cx, cy] = unvisited[Math.floor(Math.random() * unvisited.length)];
    let path: [number, number][] = [[cx, cy]];
    const pathSet = new Set([`${cx},${cy}`]);
    // 방향: 상하좌우 2칸씩
    const dirs = [
      [0, 2], [2, 0], [0, -2], [-2, 0]
    ];
    // 방문 지점까지 랜덤 워크
    while (!visited[cy][cx]) {
      let moves: [number, number][] = [];
      for (const [dx, dy] of dirs) {
        const nx = cx + dx, ny = cy + dy;
        if (nx > 0 && nx < this.cols - 1 && ny > 0 && ny < this.rows - 1)
          moves.push([nx, ny]);
      }
      const [nx, ny] = moves[Math.floor(Math.random() * moves.length)];
      // loop-erased: 이미 경로에 있으면 그 이후 다 삭제
      const existIdx = path.findIndex(([px, py]) => px === nx && py === ny);
      if (existIdx !== -1) {
        path = path.slice(0, existIdx + 1);
      } else {
        path.push([nx, ny]);
      }
      cx = nx; cy = ny;
    }
    // 3. 경로 통로화
    for (let i = 0; i < path.length; i++) {
      const [px, py] = path[i];
      maze[py][px] = 0;
      visited[py][px] = true;
      // 중간 벽도 뚫기
      if (i > 0) {
        const [px0, py0] = path[i - 1];
        maze[(py + py0) >> 1][(px + px0) >> 1] = 0;
        visited[(py + py0) >> 1][(px + px0) >> 1] = true;
      }
    }
    // 방문 리스트에서 다 제거
    unvisited = unvisited.filter(([ux, uy]) => !visited[uy][ux]);
  }
  return maze;
}


  private _cellNeighbors(x: number, y: number, maze: number[][]): GridPos[] {
    const dirs = [[0,2],[2,0],[0,-2],[-2,0]];
    const out: GridPos[] = [];
    for (const [dx, dy] of dirs) {
      const nx = x + dx, ny = y + dy;
      if (
        nx > 0 && nx < this.cols-1 &&
        ny > 0 && ny < this.rows-1 &&
        maze[ny][nx] === 1
      ) {
        out.push({ x: nx, y: ny });
      }
    }
    return out;
  }

  // 루프(사이클) 추가
  private _addLoops(maze: number[][], level: number): number[][] {
    const prob = Math.min(0.03 + level * 0.005, 0.20);//20%
    for (let y = 1; y < this.rows-1; y++) {
      for (let x = 1; x < this.cols-1; x++) {
        if (
          maze[y][x] === 1 &&
          Math.random() < prob &&
          this._cellNeighbors(x, y, maze).length === 1
        ) {
          maze[y][x] = 0;
        }
      }
    }
    return maze;
  }

  // 최단경로 보장
  private _ensureMinPath(maze: number[][], level: number): number[][] {
    const maxAttempts = 5;
    const minLen = Math.floor((this.rows + this.cols) * (1 + 0.08 * level));
    let attempts = 0;
    while (++attempts < maxAttempts) {
      if (this._calcShortestPath(maze) >= minLen) break;
      // 재생성
      if (level <= 4) maze.splice(0, maze.length, ...this._dfs());
      else if (level <= 10) maze.splice(0, maze.length, ...this._huntAndKill());
      else maze.splice(0, maze.length, ...this._wilson());
      this._addLoops(maze, level);
    }
    return maze;
  }

  // (1,1)~(19,19) 최단거리 BFS
  private _calcShortestPath(maze: number[][]): number {
    const visited = Array(this.rows).fill(0).map(() => Array(this.cols).fill(false));
    type BFS = GridPos & { d: number };
    const q: BFS[] = [{ x: 1, y: 1, d: 0 }];
    visited[1][1] = true;
    while (q.length) {
      const { x, y, d } = q.shift()!;
      if (x === this.cols-2 && y === this.rows-2) return d;
      for (const o of this._cellNeighbors(x, y, maze)) {
        if (!visited[o.y][o.x] && maze[o.y][o.x] === 0) {
          visited[o.y][o.x] = true;
          q.push({ x: o.x, y: o.y, d: d + 1 });
        }
      }
    }
    return 0;
  }
}
