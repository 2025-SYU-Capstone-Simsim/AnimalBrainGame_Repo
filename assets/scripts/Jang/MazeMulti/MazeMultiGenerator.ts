import { GridPos } from "./MazeMultiLogic";

/**
 * 15×15 고정 크기 격자에서 Hunt-and-Kill 알고리즘으로 미로를 생성합니다.
 * 2D 배열 형태로 반환하며, 0은 이동 가능(path), 1은 벽(wall)을 의미합니다.
 */
export default class MazeGenerator {
  public readonly rows: number;
  public readonly cols: number;

  constructor(rows: number, cols: number) {
    // 전달받은 rows, cols 값을 사용하여 고정 크기 미로 설정
    this.rows = rows;
    this.cols = cols;
  }

  /**
   * 새로운 미로를 생성합니다.
   * @param level 난이도 확장용 파라미터(현재 구현에서는 사용되지 않음)
   * @returns 2차원 배열로 표현된 미로 데이터
   */
  public generateMaze(level: number = 1): number[][] {
    return this._huntAndKill();
  }

  /**
   * Hunt-and-Kill 알고리즘을 이용한 내부 미로 생성 로직
   * @returns 생성된 미로의 2D 배열
   */
  private _huntAndKill(): number[][] {
    // 모든 셀을 벽(1)으로 초기화
    const maze: number[][] = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(1)
    );
    // 방문 여부 체크용 2D 배열
    const visited: boolean[][] = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(false)
    );

    // 시작점 (1,1)
    let current: GridPos = { x: 1, y: 1 };
    visited[current.y][current.x] = true; // 시작 셀 방문 처리
    maze[current.y][current.x] = 0;       // 시작 셀을 이동 경로로 설정

    // 상하좌우 2칸씩 이동하기 위한 방향 벡터
    const dirs = [
      { dx: 0, dy: 2 },
      { dx: 2, dy: 0 },
      { dx: 0, dy: -2 },
      { dx: -2, dy: 0 },
    ];

    while (true) {
      // 현재 위치에서 방문하지 않은 인접 셀(2칸 거리) 탐색
      const neighbors = dirs
        .map(d => ({ x: current.x + d.dx, y: current.y + d.dy, d }))
        .filter(p =>
          p.x > 0 && p.x < this.cols - 1 &&
          p.y > 0 && p.y < this.rows - 1 &&
          !visited[p.y][p.x]
        );

      if (neighbors.length > 0) {
        // 방문할 인접 셀 무작위 선택
        const pick = neighbors[Math.floor(Math.random() * neighbors.length)];
        // 현재 셀과 선택된 셀 사이의 벽 제거
        const mx = current.x + pick.d.dx / 2;
        const my = current.y + pick.d.dy / 2;
        maze[my][mx] = 0;
        // 선택된 셀을 경로로 설정 및 방문 처리
        maze[pick.y][pick.x] = 0;
        visited[pick.y][pick.x] = true;
        // 현재 위치를 선택된 셀로 이동
        current = { x: pick.x, y: pick.y };
        continue; // 다시 경로 개간 단계로 반복
      }

      // Hunt 단계: 아직 방문하지 않은 셀 중 인접에 방문된 셀이 있는 셀 찾기
      let found = false;
      for (let y = 1; y < this.rows; y += 2) {
        for (let x = 1; x < this.cols; x += 2) {
          if (!visited[y][x]) {
            const adjacent = dirs
              .map(d => ({ x: x + d.dx, y: y + d.dy, d }))
              .filter(p =>
                p.x > 0 && p.x < this.cols - 1 &&
                p.y > 0 && p.y < this.rows - 1 &&
                visited[p.y][p.x]
              );
            if (adjacent.length > 0) {
              // 인접된 방문 셀 중 무작위 선택하여 경로 연결
              const pick = adjacent[Math.floor(Math.random() * adjacent.length)];
              const mx2 = x + pick.d.dx / 2;
              const my2 = y + pick.d.dy / 2;
              maze[my2][mx2] = 0;
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
      // 새로 연결할 경로가 없으면 종료
      if (!found) break;
    }

    return maze;
  }
}
