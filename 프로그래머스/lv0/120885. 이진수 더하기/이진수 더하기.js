function solution(bin1, bin2) {
    const answer = (+bin1 + +bin2)
        .toString()
        .split('')
        .map(v => +v)
        .reverse();
    
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] >= 2 && answer[i+1] * 0 === 0) {
            answer[i] -= 2;
            answer[i+1] += 1;
        } else if (answer[i] >= 2 && answer[i+1] * 0 !== 0) {
            answer[i] -= 2;
            answer.push(1)
        }
    }
    
    return answer.reverse().join('')
}