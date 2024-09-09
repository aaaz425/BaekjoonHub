function solution(board, moves) {
  const stack = Array(moves.length).fill(0);
  let top = -1;
  let result = 0;

  moves.forEach((move) => {
    move -= 1;

    for (let i = 0; i < board.length; i++) {
      if (board[i][move]) {
        top += 1;
        stack[top] = board[i][move];
        board[i][move] = 0;

        if (top > 0 && stack[top] === stack[top - 1]) {
          top -= 2;
          result += 2;
        }

        break;
      }
    }
  });

  return result;
}