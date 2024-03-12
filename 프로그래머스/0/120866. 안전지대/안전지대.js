function solution(board) {
    let answer = board.length * board.length;
    const range = [[-1, -1], [-1, 0], [-1, 1], 
                    [0, -1], [0, 0], [0, 1], 
                    [1, -1], [1, 0], [1, 1]];
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const isNotSafe = range.some(idx => {
                const [x, y] = idx;

                return board?.[i + x]?.[j + y];
            })
            
            if (isNotSafe) {
                answer--;
            }
        }
    }
    
    return answer;
}