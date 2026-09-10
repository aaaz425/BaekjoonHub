function solution(s) {
    const stack = [];
    let top = -1;
    
    for (const char of s) {
        stack.push(char);
        top++;
        
        if (top > 0) {
            while (top > 0) {
                if (stack.at(top) === '(') {
                    break;
                } else {
                    if (stack.at(top - 1) === '(') {
                        stack.pop();
                        stack.pop();
                        top -= 2;
                    }
                }
            }
        }
    }
    
    return stack.length ? false : true;
}