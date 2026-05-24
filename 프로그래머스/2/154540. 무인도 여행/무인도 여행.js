function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const result = [];

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function bfs(startX, startY) {
    const queue = [[startX, startY]];
    visited[startX][startY] = true;

    let sum = Number(maps[startX][startY]);
    let head = 0;

    while (head < queue.length) {
      const [x, y] = queue[head++];

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < n &&
          ny < m &&
          !visited[nx][ny] &&
          maps[nx][ny] !== 'X'
        ) {
          visited[nx][ny] = true;
          sum += Number(maps[nx][ny]);
          queue.push([nx, ny]);
        }
      }
    }

    return sum;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && maps[i][j] !== 'X') {
        result.push(bfs(i, j));
      }
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}