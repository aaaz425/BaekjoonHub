function solution(players, callings) {
    const hash = {};
    
    players.forEach((player, index) => {
        hash[player] = index;
    });
    
    callings.forEach((calling) => {
        [players[hash[calling] - 1], players[hash[calling]]] = [players[hash[calling]], players[hash[calling] - 1]];

        hash[players[hash[calling]]] = hash[calling];
        hash[calling]--;
    });
    
    return players;
}
