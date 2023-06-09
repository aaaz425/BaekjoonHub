function solution(n) {
    const container = [];
    
    for (let i = 0; i < n; i++) {
        const item = [];
        
        for (let j = 0; j < n; j++) {
            if  (i === j) {
                item.push(1);
            } else {
                item.push(0);
            }
        }
        
        container.push(item);
    }
    
    return container;
}