function solution(n, k) {
    // var answer = 0;
    // answer += n * 12000;
    // answer += k * 2000;
    // answer += -(Math.floor(n/10) * 2000);
    // return answer;
    
    return 12000 * n + 2000 * k - (Math.floor(n/10) * 2000)
}