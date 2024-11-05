function solution(maps) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    let Q = Array(maps.length * maps[0].length).fill([]);
    const times = Array(maps.length)
        .fill(0)
        .map(() => Array(maps[0].length).fill(0));
    let visited = Array(maps.length)
        .fill(0)
        .map(() => Array(maps[0].length).fill(0));
    let rear = -1;
    let front = 0;
    
    // maps 탐색하며 시작점 확보
    for (let y = 0; y < maps.length; y++) {
        if (maps[y].indexOf('S') !== -1) {
            Q[front] = [y, maps[y].indexOf('S')];
            visited[y][maps[y].indexOf('S')]++;
            break;
        }
    }
    
    let isPullLever = 0;
    
    // 레버 당기기
    while (front > rear) {
        rear++;
        const [y, x] = Q[rear];
        
        for (let i = 0; i < 4; i++) {
            const tx = x + dx[i];
            const ty = y + dy[i];
            
            if (tx >= 0 && tx < maps[0].length && 
                ty >= 0 && ty < maps.length && 
                !visited[ty][tx]) {
                if (maps[ty][tx] === 'L') {
                    front++;
                    Q[front] = [ty, tx];
                    visited[ty][tx]++;
                    times[ty][tx] = times[y][x] + 1;
                    isPullLever++;
                } else if (['O', 'E'].includes(maps[ty][tx])) {
                    front++;
                    Q[front] = [ty, tx];
                    visited[ty][tx]++;
                    times[ty][tx] = times[y][x] + 1;
                }
            }
        }
        
        if (isPullLever) {
            break;
        }
    }
    
    if (front === rear) {
        return -1;
    }
    
    // 방문 여부, Q 초기화
    const lever = Q[front];
    Q = Array(maps.length * maps[0].length).fill([]);
    visited = Array(maps.length)
        .fill(0)
        .map(() => Array(maps[0].length).fill(0));
    rear = -1;
    front = 0;
    Q[front] = lever;
    visited[lever[0]][lever[1]]++;
    
    // 끝 지점 가기
    while (front > rear) {
        rear++;
        const [y, x] = Q[rear];
        
        for (let i = 0; i < 4; i++) {
            const tx = x + dx[i];
            const ty = y + dy[i];
            
            if (tx >= 0 && tx < maps[0].length && 
                ty >= 0 && ty < maps.length && 
                !visited[ty][tx]) {
                if (maps[ty][tx] === 'E') {
                    return times[y][x] + 1;
                } 
                if (['O', 'S'].includes(maps[ty][tx])) {
                    front++;
                    Q[front] = [ty, tx];
                    visited[ty][tx]++;
                    times[ty][tx] = times[y][x] + 1;
                }
            }
        }
    }
    
    return -1;
}