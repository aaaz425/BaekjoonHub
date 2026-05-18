function solution(board) {
    const row = board.length;
    const col = board[0].length;
    
    let max = 0;
    
    for (let i = 0; i < row; i++) {
        max = Math.max(max, board[i][0]);
    }
    
    for (let j = 0; j < col; j++) {
        max = Math.max(max, board[0][j]);
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (board[i][j] === 1) {
                board[i][j] =
                    Math.min(
                        board[i - 1][j],
                        board[i][j - 1],
                        board[i - 1][j - 1]
                    ) + 1;

                max = Math.max(max, board[i][j]);
            }
        }
    }

    return max * max;
}