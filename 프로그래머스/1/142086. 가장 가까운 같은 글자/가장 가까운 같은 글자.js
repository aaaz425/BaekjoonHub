function solution(s) {
    const answer = [];
    
    for (let i = 0; i < s.length; i++) {
        const tempS = s.substring(0, i);
        
        const lastTargetIdx = tempS.lastIndexOf(s[i])
        
        if (lastTargetIdx === -1) {
            answer.push(lastTargetIdx);
        } else {
            answer.push(i - lastTargetIdx);   
        }
    }
    
    return answer;
}