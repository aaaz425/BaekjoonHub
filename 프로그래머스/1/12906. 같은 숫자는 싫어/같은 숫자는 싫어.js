function solution(arr) {
    const stack = [];
    let top = -1;
    
    for (const num of arr) {
        if (stack[top] === num) {
            continue;
        }
        
        top++;
        stack.push(num);
    }
    
    return stack;
}