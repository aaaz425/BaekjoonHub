function solution(s) {
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        s = s.slice(1) + s[0];
        stack = [];
        
        for (let j = 0; j < s.length; j++) {
            stack.push(s[j]);
            
            if (stack.length === 1) {
                if (stack[0] === ')' || stack[0] === '}' || stack[0] === ']') {
                    break;
                }
                
                continue;
            }
            
            if ((stack.at(-1) === ')' && stack.at(-2) === '(') ||
                (stack.at(-1) === '}' && stack.at(-2) === '{') ||
                (stack.at(-1) === ']' && stack.at(-2) === '[')) {
                stack.pop();
                stack.pop();
            }
        }
    
        if (!stack.length) {
            answer++;
        }
    }
    
    return answer;
}