function solution(numbers, hand) {
    let [lx, ly] = [0, 3];
    let [rx, ry] = [2, 3];
    const left = [1, 4, 7];
    const center = [2, 5, 8, 0];
    const right = [3, 6, 9];
    
    let answer = '';
    numbers.forEach(number => {
        if (left.includes(number)) {
            lx = 0;
            ly = left.indexOf(number);
            answer += 'L';
        } else if (right.includes(number)) {
            rx = 2;
            ry = right.indexOf(number);
            answer += 'R';
        } else {
            const y = center.indexOf(number);
            const lGap = 1 - lx + Math.abs(ly - y);
            const rGap = rx - 1 + Math.abs(ry - y);
            
            if (lGap > rGap) {
                rx = 1;
                ry = y;
                answer += 'R';
            } else if (lGap < rGap) {
                lx = 1;
                ly = y;
                answer += 'L';
            } else {
                if (hand === 'left') {
                    lx = 1;
                    ly = y;
                    answer += 'L';
                } else {
                    rx = 1;
                    ry = y;
                    answer += 'R';
                }
            }
        }
    });
    
    return answer;
}