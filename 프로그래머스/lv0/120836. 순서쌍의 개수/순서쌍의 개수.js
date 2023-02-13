function solution(n) {
    let answer = 0;
    for(let i = 2; i <= n; i++) {
        if(n % i === 0) answer++;
    }
    return answer + 1;
}