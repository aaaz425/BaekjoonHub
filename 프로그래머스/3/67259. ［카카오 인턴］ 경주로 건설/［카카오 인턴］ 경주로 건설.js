function solution(board) {
  const n = board.length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const INF = Infinity;

  const cost = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Array(4).fill(INF))
  );

  const queue = [];

  for (let dir = 0; dir < 4; dir++) {
    cost[0][0][dir] = 0;
  }

  queue.push([0, 0, -1, 0]); 

  while (queue.length) {
    const [x, y, prevDir, currCost] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

      if (board[nx][ny] === 1) continue;

      let nextCost;

      if (prevDir === -1 || prevDir === dir) {
        nextCost = currCost + 100;
      } else {
        nextCost = currCost + 600;
      }

      if (cost[nx][ny][dir] > nextCost) {
        cost[nx][ny][dir] = nextCost;
        queue.push([nx, ny, dir, nextCost]);
      }
    }
  }

  return Math.min(...cost[n - 1][n - 1]);
}