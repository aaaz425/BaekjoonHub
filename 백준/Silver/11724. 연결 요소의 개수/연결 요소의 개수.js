const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

const visited = Array(N + 1).fill(false);

function dfs(start) {
    const stack = [start];
    visited[start] = true;

    while (stack.length) {
        const cur = stack.pop();
        for (const next of graph[cur]) {
            if (!visited[next]) {
                visited[next] = true;
                stack.push(next);
            }
        }
    }
}

let count = 0;

for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        dfs(i);
        count++;
    }
}

console.log(count);