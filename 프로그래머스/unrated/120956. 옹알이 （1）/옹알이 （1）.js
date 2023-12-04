function solution(babbling) {
    const possible = ["aya", "ye", "woo", "ma"];
    
    return babbling.reduce((acc, cur) => {
        let findCount = 0;
        let replaceCount = 0;
        
        possible.forEach(word => {
            if (cur.includes(word)) {
                findCount += 1;
            }
        })
        
        possible.forEach(word => {
            if (cur.includes(word)) {
                cur = cur.replace(word, "");
                replaceCount += 1;    
            }
        })
        
        if (replaceCount !== findCount) {
            return acc;
        }
        
        if (!cur.length) {
            return acc + 1;
        }
            
        return acc;
    }, 0);
}