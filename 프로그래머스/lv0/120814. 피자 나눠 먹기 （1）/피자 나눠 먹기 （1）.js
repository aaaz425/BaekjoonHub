function solution(n) {
    let answer = 1;
    for (let i = 1; 7 * i < n; i++) {
        answer ++;
    }
    return answer;
}