function solution(n, left, right) {
    const answer = [];
    
    for (let i = left; i <= right; i++) {
        const standard = Math.floor(i / n) + 1;
        const rest = i % n + 1;

        answer.push(standard > rest ? standard : rest)

    }

    return answer;
}