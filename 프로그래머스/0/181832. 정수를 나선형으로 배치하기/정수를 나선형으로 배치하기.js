function solution(n) {
    let answer = Array.from({length : n}, (_) => Array.from({length: n}, (_) => 0));
    let x = 0;
    let y = 0;
    let direction = 0;
    
    for (let i = 0; i < n * n; i++) {
        if (direction === 0) {      
            if(answer?.[y]?.[x + 1] === 0) {
                answer[y][x] = i + 1;
                x++;
            } else {
                answer[y][x] = i + 1;
                y++;
                direction = 1;
            }
        } else if (direction === 1) {
            if(answer?.[y + 1]?.[x] === 0) {
                answer[y][x] = i + 1;
                y++;
            } else {
                answer[y][x] = i + 1;
                x--;
                direction = 2;
            }
        } else if (direction === 2) {
            if(answer?.[y]?.[x - 1] === 0) {
                answer[y][x] = i + 1;
                x--;
            } else {
                answer[y][x] = i + 1;
                y--;
                direction = 3;
            }
        } else if (direction === 3) {
            if(answer?.[y - 1]?.[x] === 0) {
                answer[y][x] = i + 1;
                y--;
            } else {
                answer[y][x] = i + 1;
                x++;
                direction = 0;
            }
        }
    }
    
    return answer;
}