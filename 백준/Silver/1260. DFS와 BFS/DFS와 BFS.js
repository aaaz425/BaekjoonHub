const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

// 그래프 만들기
for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

// 작은순으로 정렬
for (let i = 1; i <= N; i++) {
    graph[i].sort((a, b) => a - b);
}

const dfsVisited = Array(N + 1).fill(false);
const bfsVisited = Array(N + 1).fill(false);

let dfsResult = [];
let bfsResult = [];

// DFS
function dfs(node) {
    dfsVisited[node] = true;
    dfsResult.push(node);

    for (const next of graph[node]) {
        if (!dfsVisited[next]) dfs(next);
    }
}

// BFS
function bfs(start) {
    const queue = [start];
    bfsVisited[start] = true;

    while (queue.length) {
        const cur = queue.shift();
        bfsResult.push(cur);

        for (const next of graph[cur]) {
            if (!bfsVisited[next]) {
                bfsVisited[next] = true;
                queue.push(next);
            }
        }
    }
}

dfs(V);
bfs(V);

console.log(dfsResult.join(' '));
console.log(bfsResult.join(' '));