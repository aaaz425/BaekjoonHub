function solution(board) {
    let answer = board.length * board.length;
    const range = [[-1, -1], [-1, 0], [-1, 1], 
                    [0, -1], [0, 0], [0, 1], 
                    [1, -1], [1, 0], [1, 1]];
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const isNotSafe = range.some(idx => {
                const [x, y] = idx;
                const targetX = i + x < 0 ? 0 : 
                    i + x > board.length - 1 ? board.length - 1 : 
                    i + x;
                const targetY = j + y < 0 ? 0 : 
                    j + y > board.length - 1 ? board.length - 1 : 
                    j + y

                return board[targetX][targetY];
            })
            
            if (isNotSafe) {
                answer--;
            }
        }
    }
    
    return answer;
}