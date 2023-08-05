function solution(s) {
    if(s[0] === ')' || s[s.length - 1] ==='(') {
      return false;
    }
    
    const stack = [];

    s.split('').forEach(value => {
        if(value === ')' && stack[stack.length-1] === '(') {
            stack.pop();
        }
        
        else {
            stack.push(value);
        }
    });

    return stack.length === 0;
}