function solution(park, routes) {
    let x = 0;
    let y = 0;
    const w = park[0].length - 1;
    const h = park.length - 1;
    
    for (let sy = 0; sy < park.length; sy++) {
        let found = 0;
        for (let sx = 0; sx < park[sy].length; sx++) {
            if (park[sy][sx] === 'S') {
                x = sx;
                y = sy;
                break;
            }
        }
        if (found) {
            break;
        }
    }

    for (let r = 0; r < routes.length; r++) {
        const [op, n] = routes[r].split(' ');
        
        if (op === 'E') {
            if (x + +n > w) {
                continue;
            }
            
            let tx = x;
            for (let i = 0; i < +n; i++) {
                tx++;
                if (park[y][tx] === 'X') {
                    tx = x;
                    break;
                }
            }
            x = tx;
        } else if (op === 'W') {
            if (x - +n < 0) {
                continue;
            }
            
            let tx = x;
            for (let i = 0; i < +n; i++) {
                tx--;
                if (park[y][tx] === 'X') {
                    tx = x;
                    break;
                }
            }
            x = tx;
        } else if (op === 'S') {
            if (y + +n > h) {
                continue;
            }
            
            let ty = y;
            for (let i = 0; i < +n; i++) {
                ty++;
                if (park[ty][x] === 'X') {
                    ty = y;
                    break;
                }
            }
            y = ty;
        } else {
            if (y - +n < 0) {
                continue;
            }
            
            let ty = y;
            for (let i = 0; i < +n; i++) {
                ty--;
                if (park[ty][x] === 'X') {
                    ty = y;
                    break;
                }
            }
            y = ty;
        }
    }
    
    return [y, x];
}