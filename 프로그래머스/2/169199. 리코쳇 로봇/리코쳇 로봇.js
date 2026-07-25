function solution(board) {
    const n = board.length;
    const m = board[0].length;

    let R, G;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'R') R = [i, j];
            if (board[i][j] === 'G') G = [i, j];
        }
    }
    
    const d = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const visited = Array(n).fill(0).map(v => Array(m).fill(false));
        
    let head = 0;
    const queue = [[R[0], R[1], 0]];
    visited[R[0]][R[1]] = true;
    
    while (head < queue.length) {
        const [y, x, count] = queue[head++];
        
        if (y === G[0] && x === G[1]) {
            return count;
        }
        
        for (const [dy, dx] of d) {
            let ny = y
            let nx = x;
            
            while (true) {
                const ty = ny + dy;
                const tx = nx + dx;
                
                if (ty < 0 || ty >= n || tx < 0 || tx >= m || board[ty][tx] === 'D') {
                    break;
                }
                
                ny = ty;
                nx = tx;
            }
            
            if (!visited[ny][nx]) {
                visited[ny][nx] = true;
                queue.push([ny, nx, count + 1]);
            }
        }
    }
    
    return -1;
}