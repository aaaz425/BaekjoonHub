function solution(clothes) {
    const map = new Map();
    
    for (const [_, thing] of clothes) {
        map.set(thing, (map.get(thing) || 0) + 1);
    }
    
    let answer = 1;
    
    for (value of map.values()) {
        answer *= value + 1;
    }
    
    return answer - 1;
}