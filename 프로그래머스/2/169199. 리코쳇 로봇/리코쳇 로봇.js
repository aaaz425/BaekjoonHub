function solution(board) {
    const n = board.length;
    const m = board[0].length;
    
    const cnt = Array(n).fill(0).map(v => Array(m).fill(Infinity));
    let min = Infinity;
    
    const dfs = (y, x, count) => {
        if (count >= min || count >= cnt[y][x]) {
            return;
        }
        
        if (board[y][x] === 'G') {
            min = count;
            return;
        }
        
        cnt[y][x] = count;
        count++;
        
        let [ty, dy] = [y, y];
        let [rx, lx] = [x, x];
        
        while (ty > 0 && board[ty - 1][x] !== 'D') {
            ty--;
        }
        
        while (rx < m - 1 && board[y][rx + 1] !== 'D') {
            rx++;
        }
        
        while (dy < n - 1 && board[dy + 1][x] !== 'D') {
            dy++;
        }
        
        while (lx > 0 && board[y][lx - 1] !== 'D') {
            lx--;
        }
        
        dfs(ty, x, count);
        dfs(y, rx, count);
        dfs(dy, x, count);
        dfs(y, lx, count);
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'R') {
                dfs(i, j, 0);
            }
        }
    }
    
    return min === Infinity ? -1 : min;
}