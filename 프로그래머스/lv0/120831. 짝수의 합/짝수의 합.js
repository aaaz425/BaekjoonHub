function solution(n) {
    let answer = 0;
    let i = 1;
    while(n >= i) {
        i % 2 == 0 ? answer += i : answer;
        i++
    }
    return answer;
}