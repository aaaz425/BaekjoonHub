function solution(elements) {
    const set = new Set();
    
    const len = elements.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let sum = 0;
            for (let k = 0; k < j; k++) {
                sum += elements[(i + k) % len]
            }
            set.add(sum);
        }
    }
    
    return set.size;
}