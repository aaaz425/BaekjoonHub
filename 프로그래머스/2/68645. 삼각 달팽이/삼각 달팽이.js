function solution(n) {
  const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

  const dy = [1, 0, -1];
  const dx = [0, 1, -1];

  let y = -1;
  let x = 0;
  let num = 1;
  let dir = 0;

  const max = (n * (n + 1)) / 2;

  while (num <= max) {
    const ny = y + dy[dir];
    const nx = x + dx[dir];

    if (
      ny < 0 ||
      ny >= n ||
      nx < 0 ||
      nx >= triangle[ny].length ||
      triangle[ny][nx] !== 0
    ) {
      dir = (dir + 1) % 3;
      continue;
    }

    y = ny;
    x = nx;
    triangle[y][x] = num;
    num++;
  }

  return triangle.flat();
}