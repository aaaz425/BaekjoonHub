const fs = require('fs');
const [n, pairCount, ...pairs] = fs.readFileSync(0, 'utf8').trim().split('\n');
const graph = Array.from({ length: +n + 1 }, () => []);

for (let i = 0; i < +pairCount; i++) {
    const [a, b] = pairs[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

let answer = 0;

const dfs = (next, visited = new Set()) => {
    if (visited.has(next)) return;
    
    visited.add(next);
    
    for (const node of graph[next]) {
        if (!visited.has(node)) {
            answer++;
            dfs(node, visited);
        }
    }
}

dfs(1);

console.log(answer);