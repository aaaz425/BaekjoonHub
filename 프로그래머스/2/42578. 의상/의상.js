function solution(clothes) {
    const map = new Map();
    
    for (const clothing of clothes) {
        const [_, type] = clothing;
        if (map.has(type)) {
            map.set(type, map.get(type) + 1);
        } else {
            map.set(type, 1);
        }
    }
    
    let answer = 1;
    for (const [key, val] of map) {
        answer *= (val + 1);
    }
    
    return answer - 1;
}