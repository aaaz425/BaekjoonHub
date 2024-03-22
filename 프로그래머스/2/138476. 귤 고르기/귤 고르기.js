function solution(k, tangerine) {
    const map = new Map();
    
    tangerine.forEach(v => {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
            return;
        }
        
        map.set(v, 1);
    })
    
    const sortedMap = [...map].sort((a, b) => b[1] - a[1]);
    
    let answer = 0;
    let count = 0;
    
    while (count < k) {
        count += sortedMap[answer][1];
        answer++;
    }
    
    return answer;
}