function solution(orders, course) {
    const answer = [];
    
    function combination(arr, len) {
        const result = [];
        
        function dfs(start, path) {
            if (path.length === len) {
                result.push(path.join(''));
                return;
            }
            
            for (let i = start; i < arr.length; i++) {
                path.push(arr[i]);
                dfs(i + 1, path);
                path.pop();
            }
        }
        
        dfs(0, []);
        return result;
    }
    
    for (const size of course) {
        const map = new Map();
        let max = 0;
        
        for (let order of orders) {
            order = order.split('').sort();
            
            if (order.length < size) continue;
            
            const combis = combination(order, size);
            
            for (const comb of combis) {
                const count = (map.get(comb) || 0) + 1;
                map.set(comb, count);
                
                max = Math.max(max, count);
            }
        }
        
        for (const [menu, count] of map) {
            if (count >= 2 && count === max) {
                answer.push(menu);
            }
        }
    }
    
    return answer.sort();
}