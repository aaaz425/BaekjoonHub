function solution(word) {
    const chars = ['A', 'E', 'I', 'O', 'U'];
    const list = [];

    function dfs(current) {
        if (current.length > 5) return;
        if (current.length > 0) list.push(current);

        for (const ch of chars) {
            dfs(current + ch);
        }
    }

    dfs("");

    return list.indexOf(word) + 1;
}