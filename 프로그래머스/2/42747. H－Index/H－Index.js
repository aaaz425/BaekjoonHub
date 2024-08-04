function solution(citations) {
    citations = citations.sort((a, b) => b - a);
    let answer = 0
    let temp = 0
    
    for (let i = 0; i < citations.length; i++) {
        temp++;
        
        if (citations[i] < temp) {
            break;
        }
        
        answer++;
    }
    
    return answer;
}