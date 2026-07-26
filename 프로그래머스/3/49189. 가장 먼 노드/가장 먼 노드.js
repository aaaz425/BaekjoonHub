function solution(n, edge) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [s, e] of edge) {
        graph[s].push(e);
        graph[e].push(s);
    }
    const dist = Array(n + 1).fill(-1);
    dist[1] = 0;
    
    const queue = [1];
    let head = 0;

    while (head < queue.length) {
        const now = queue[head++];

        for (const next of graph[now]) {
            if (dist[next] !== -1) continue;

            dist[next] = dist[now] + 1;
            queue.push(next);
        }
    }
    
    const max = Math.max(...dist);
    const answer = dist.filter(v => v === max).length;
    return answer;
}