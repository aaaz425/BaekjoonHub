function solution(rows, columns, queries) {
  const board = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: columns }, (_, c) => r * columns + c + 1)
  );

  const answer = [];

  for (const [x1, y1, x2, y2] of queries) {
    const top = x1 - 1;
    const left = y1 - 1;
    const bottom = x2 - 1;
    const right = y2 - 1;

    let prev = board[top][left];
    let min = prev;

    for (let c = left + 1; c <= right; c++) {
      [board[top][c], prev] = [prev, board[top][c]];
      min = Math.min(min, prev);
    }

    for (let r = top + 1; r <= bottom; r++) {
      [board[r][right], prev] = [prev, board[r][right]];
      min = Math.min(min, prev);
    }

    for (let c = right - 1; c >= left; c--) {
      [board[bottom][c], prev] = [prev, board[bottom][c]];
      min = Math.min(min, prev);
    }

    for (let r = bottom - 1; r >= top; r--) {
      [board[r][left], prev] = [prev, board[r][left]];
      min = Math.min(min, prev);
    }

    answer.push(min);
  }

  return answer;
}