function solution(participant, completion) {
    const map = new Map();
    
    for (const name of participant) {
        if (map.get(name)) {
            map.set(name, map.get(name) + 1);
        } else {
            map.set(name, 1);
        }
    }
    
    for (const name of completion) {
        map.set(name, map.get(name) - 1);
    }
    
    for (const name of map.keys()) {
        if (map.get(name)) {
            return name;
        }
    }
}