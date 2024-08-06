function solution(k, m, score) {
    const sortedScore = score.sort();
    let result = 0;
    
    for (let i = score.length - m; i >= 0; i -= m) {
        result += sortedScore[i] * m;
    }
    
    return result;
}