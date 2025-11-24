function solution(progresses, speeds) {
    const answer = [];
    let Q = [];
    
    for (let i = 0; i < progresses.length; i++) {
        const rest = Math.ceil((100 - progresses[i]) / speeds[i]);
        
        if (rest > Q[0]) {
            answer.push(Q.length);
            Q = [];
        }
        
        Q.push(rest);
    }
    
    if (Q.length) {
        answer.push(Q.length);
    }
    
    return answer;
}