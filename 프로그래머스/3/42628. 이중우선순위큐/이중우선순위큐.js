function solution(operations) {
    const queue = [];
    
    operations.forEach(operation => {
        const [a, b] = operation.split(' ');
        
        if (a === 'I') {
            queue.push(+b);
            return;
        }
        
        if (!queue.length) {
            return;
        }
        
        if (b == 1) {
            const targetIdx = queue.indexOf(Math.max(...queue));
            queue.splice(targetIdx, 1);
        } else {
            const targetIdx = queue.indexOf(Math.min(...queue));
            queue.splice(targetIdx, 1);
        }
    })
    
    if (!queue.length) {
        return [0, 0];
    }
    
    return [Math.max(...queue), Math.min(...queue)];
}