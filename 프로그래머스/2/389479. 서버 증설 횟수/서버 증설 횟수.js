function solution(players, m, k) {
    let answer = 0;
    const servers = players.map(v => 1);
    
    players.forEach((player, idx) => {
        if (player >= servers[idx] * m) {
            const needed = Math.floor(player / m) - servers[idx] + 1;
            answer += needed;
            
            let i = 0;
            while (i < k) {
                if (idx + i >= servers.length) break;
                servers[idx + i] += needed;
                
                i++;
            }
        }
    })
    
    return answer;
}