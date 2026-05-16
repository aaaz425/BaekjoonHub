function solution(board) {
    const n = board.length;
    const m = board[0].length;
    
    let start = null;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "R") {
                start = [i, j];
            }
        }
    }
    
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];
    
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[...start, 0]];
    
    visited[start[0]][start[1]] = true;
    
    while (queue.length) {
        const [x, y, count] = queue.shift();
        
        if (board[x][y] === "G") {
            return count;
        }
        
        for (const [dx, dy] of dirs) {
            let nx = x;
            let ny = y;
            
            while (true) {
                const tx = nx + dx;
                const ty = ny + dy;
                
                if (
                    tx < 0 || tx >= n ||
                    ty < 0 || ty >= m ||
                    board[tx][ty] === "D"
                ) {
                    break;
                }
                
                nx = tx;
                ny = ty;
            }
            
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, count + 1]);
            }
        }
    }
    
    return -1;
}