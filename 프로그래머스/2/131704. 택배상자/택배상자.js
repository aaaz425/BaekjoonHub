function solution(order) {
    const stack = [];
    let currentBox = 1;
    let count = 0;
    let idx = 0;

    while (true) {
        if (order[idx] === currentBox) {
            count++;
            currentBox++;
            idx++;
        }
        
        else if (stack.length > 0 && stack[stack.length - 1] === order[idx]) {
            stack.pop();
            count++;
            idx++;
        }
        
        else if (currentBox <= order.length) {
            stack.push(currentBox);
            currentBox++;
        }
        
        else {
            break;
        }
    }

    return count;
}