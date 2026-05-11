function solution(gems) {
    const totalKinds = new Set(gems).size;
    
    const map = new Map();
    
    let left = 0;
    let answer = [0, gems.length - 1];
    
    for (let right = 0; right < gems.length; right++) {
        map.set(gems[right], (map.get(gems[right]) || 0) + 1);
        
        while (map.size === totalKinds) {
            
            if (right - left < answer[1] - answer[0]) {
                answer = [left, right];
            }
            
            map.set(gems[left], map.get(gems[left]) - 1);
            
            if (map.get(gems[left]) === 0) {
                map.delete(gems[left]);
            }
            
            left++;
        }
    }
    
    return [answer[0] + 1, answer[1] + 1];
}