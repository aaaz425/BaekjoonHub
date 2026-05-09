function solution(user_id, banned_id) {
    const result = new Set();
    
    function isMatch(user, banned) {
        if (user.length !== banned.length) return false;
        
        for (let i = 0; i < user.length; i++) {
            if (banned[i] === '*') continue;
            if (user[i] !== banned[i]) return false;
        }
        
        return true;
    }
    
    function dfs(idx, selected) {
        if (idx === banned_id.length) {
            const sorted = [...selected].sort().join(',');
            result.add(sorted);
            return;
        }
        
        for (const user of user_id) {
            if (selected.has(user)) continue;
            
            if (!isMatch(user, banned_id[idx])) continue;
            
            selected.add(user);
            dfs(idx + 1, selected);
            selected.delete(user);
        }
    }
    
    dfs(0, new Set());
    
    return result.size;
}