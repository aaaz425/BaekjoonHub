function solution(s) {
    let answer = 0;
    let x = s[0];
    let xCount = 0;
    let yCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === x) {
            xCount++;
        } else {
            yCount++;
        }
        
        if (xCount === yCount) {
            answer++;
            x = s[i + 1];
        }
        
        if (xCount !== yCount && i === s.length - 1) {
            answer++;
        }
    }
    
    return answer;
}