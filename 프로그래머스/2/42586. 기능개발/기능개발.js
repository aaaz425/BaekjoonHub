function solution(progresses, speeds) {
    const answer = [];
    let top = 0;
    let time = 0;
    
    while(top < progresses.length) {
        time++;
        let cur = 0;
        
        for (let i = top; i < progresses.length; i++) {
            if (progresses[i] + speeds[i] * time < 100) {
                break;
            }
            
            cur++;
        }
        
        if (cur) {
            top += cur;
            answer.push(cur);
        }
    }
    
    return answer;
}