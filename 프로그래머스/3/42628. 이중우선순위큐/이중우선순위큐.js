function solution(operations) {
    let queue = [];
    
    operations.forEach(operation => {
        const [a, b] = operation.split(' ');
        
        if (a === 'I') {
            queue.push(b);
            return;
        }
        
        if (!queue.length) {
            return;
        }
        
        queue = queue.sort((a, b) => b - a);
        
        if (b == 1) {
            queue.shift();
        } else {
            queue.pop();
        }
    })
    
    if (!queue.length) {
        return [0, 0];
    }
    
    const max = Math.max(...queue);
    const min = Math.min(...queue);
    
    return [max, min];
}
