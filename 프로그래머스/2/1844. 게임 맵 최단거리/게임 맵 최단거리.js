function solution(maps) {
  const M = maps.length;
  const N = maps[0].length;
  const visited = Array.from({ length: M }, () => Array(N).fill(0));
  const q = Array(N * M).fill([0, 0]);
  let front = -1;
  let rear = 0;
  q[rear] = [0, 0];
    
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  while (front < rear) {
    front++;
    const [y, x] = q[front];

    for (let i = 0; i < 4; i++) {
      const tx = x + dx[i];
      const ty = y + dy[i];
      if (ty >= 0 && ty < M && tx >= 0 && tx < N) {
        if (ty == M - 1 && tx == N - 1) {
          return visited[y][x] + 2;
        }

        if (maps[ty][tx] && !visited[ty][tx]) {
          rear++;
          q[rear] = [ty, tx];
          visited[ty][tx] = visited[y][x] + 1;
        }
      }
    }
  }

  return -1;
}