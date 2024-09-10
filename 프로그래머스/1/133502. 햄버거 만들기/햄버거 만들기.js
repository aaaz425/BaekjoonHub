function solution(ingredient) {
    const stack = Array(ingredient.length).fill(0);
    let top = -1;
    let cnt = 0;
    
    ingredient.forEach(v => {
        top++;
        stack[top] = v;
        
        while (top > 2) {
            if (stack[top - 3] === 1 &&
               stack[top - 2] === 2 &&
               stack[top - 1] === 3 &&
               stack[top] === 1) {
                cnt++;
                top -= 4;
            } else {
                break;
            }
        }
    })
    
    return cnt;
}