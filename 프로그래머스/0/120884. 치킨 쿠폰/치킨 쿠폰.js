function solution(chicken) {
    let answer = 0;
    
    while (true) {
        answer += Math.floor(chicken / 10);
        chicken = chicken % 10 + Math.floor(chicken / 10);
        
        if (chicken / 10 < 1) {
            break;
        }
    }
    
    return answer;
}