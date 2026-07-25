function solution(places) {
    const answer = [];
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    const check = (place) => {
        for (let sy = 0; sy < 5; sy++) {
            for (let sx = 0; sx < 5; sx++) {
                if (place[sy][sx] !== 'P') continue;
                
                const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
                
                const queue = [[sy, sx, 0]];
                let head = 0;
                visited[sy][sx] = true;
                
                while(head < queue.length) {
                    const [y, x, dist] = queue[head++];
                    
                    if (dist >= 1 && place[y][x] === 'P') {
                        return 0;
                    }
                    
                    if (dist === 2) continue;
                    
                    for (const [dy, dx] of dirs) {
                        const ny = y + dy;
                        const nx = x + dx;

                        if (
                            ny < 0 ||
                            ny >= 5 ||
                            nx < 0 ||
                            nx >= 5 ||
                            visited[ny][nx] ||
                            place[ny][nx] === 'X'
                        ) {
                            continue;
                        }

                        visited[ny][nx] = true;
                        queue.push([ny, nx, dist + 1]);
                    }
                }
            }
        }
        
        return 1;
    }
    
    for (const place of places) {
        answer.push(check(place));
    }
    
    return answer;
}