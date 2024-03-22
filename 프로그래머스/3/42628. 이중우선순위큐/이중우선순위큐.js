function solution(operations) {
    let vQueue = [];
    const cQueue = [];
    
    operations.forEach(operation => {
        const [a, b] = operation.split(' ');
        
        if (a === 'I') {
            vQueue.push(b);
            return;
        }
        
        if (!vQueue.length) {
            return;
        }
        
        vQueue = vQueue.sort((a, b) => b - a);
        
        if (b == 1) {
            vQueue.shift();
        } else {
            vQueue.pop();
        }
    })
    
    if (!vQueue.length) {
        return [0, 0];
    }
    
    const max = Math.max(...vQueue);
    const min = Math.min(...vQueue);
    
    return [max, min];
}