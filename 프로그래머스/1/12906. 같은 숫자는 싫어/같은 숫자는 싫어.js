function solution(arr) {
    const stack = [];
    
    arr.forEach(val => {
        if (stack[stack.length - 1] !== val) {
            stack.push(val);
        }
     })
    
    return stack;
}