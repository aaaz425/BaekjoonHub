function solution(progresses, speeds) {
    const leftDays = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
    let curDay = leftDays[0];
    let head = 0;
    const answer = [];
    
    while (head < leftDays.length) {
        let temp = 0;
        for (let i = head; i < leftDays.length; i++) {
            if (curDay < leftDays[i]) {
                curDay = leftDays[i]
                break;
            }
            
            temp++;
            head++;
        }
        
        if (temp) {
            answer.push(temp);
        }       
    }
    
    return answer;
}