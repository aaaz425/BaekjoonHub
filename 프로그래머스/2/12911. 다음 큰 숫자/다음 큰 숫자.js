const calc1Count = (num) => num.toString(2).split('').filter(v => v == 1).length;

function solution(n) {
    let answer = n + 1;
    const nCount = calc1Count(n);
    
    while (nCount !== calc1Count(answer)) {
        answer++;
    }
    
    return answer;
}