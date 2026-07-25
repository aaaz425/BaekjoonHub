function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array(n).fill(0).map(v => Array(m).fill(false));
    
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    const queue = [[0, 0, 1]];
    visited[0][0] = true;
    let head = 0;
    
    while(head < queue.length) {
        const [y, x, count] = queue[head++];
        
        if (y === n - 1 && x === m - 1) {
            return count;
        }
        
        for (const [dy, dx] of dir) {
            let ny = y + dy;
            let nx = x + dx;
            
            if (ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] && !visited[ny][nx]) {
                visited[ny][nx] = true;
                queue.push([ny, nx, count + 1]);
            }
        }
    }
    
    return -1;
}