function solution(n) {
    let prev = 0n;
    let answer = 1n;
    
    for (let i = 1; i < n; i++) {
        const temp = answer;
        answer += prev;
        prev = temp;
    }
    
    return BigInt(answer) % BigInt(1234567);
}