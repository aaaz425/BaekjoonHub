function solution(brown, yellow) {
    const answer = [];
    
    for (let i = 1; i <= yellow; i++) {
        const yellowHeight = i;
        const yellowWidth = yellow / i;
        
        if (yellowWidth < yellowHeight) {
            break;
        }
        
        const brownHeight = yellowHeight + 2;
        const brownWidth = yellowWidth + 2;
        
        if (brownWidth * brownHeight - yellow === brown) {
            answer.push(brownWidth);
            answer.push(brownHeight)
        }
    }
    
    return answer;
}