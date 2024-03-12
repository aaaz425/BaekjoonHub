function solution(k, score) {
    let honorList = [];
    const answer = [];
    
    score.forEach(value => {
        honorList = [...honorList, value]
            .sort((a, b) => b - a)
            .slice(0, k);
        
        const minScore = Math.min(...honorList);
        answer.push(minScore);
    })
    
    return answer;
}