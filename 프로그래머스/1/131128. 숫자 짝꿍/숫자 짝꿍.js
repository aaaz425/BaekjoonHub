function solution(X, Y) {
    const arr = Array(10).fill(0);
    
    for (let i = 0; i < 10; i++) {
        xCount = [...X].filter(v => v === `${i}`).length;
        yCount = [...Y].filter(v => v === `${i}`).length;
        arr[i] = xCount > yCount ? yCount : xCount;
    }
    
    if (![...arr.slice(1)].reduce((acc, cur) => acc + cur, 0)) {
        if (arr[0]) {
            return '0';
        }
        
        return '-1';
    }
    
    let answer = '';
    
    for (let i = 9; i >= 0; i--) {
        answer += `${i}`.repeat(arr[i]);
    }
    
    return answer;
}