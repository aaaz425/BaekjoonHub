const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
let idx = 0;
const T = +input[idx++];
const search = [[-1, 0], [1, 0], [0, -1], [0, 1]];

for (let i = 0; i < T; i ++) {
    const [M, N, K] = input[idx++].split(' ').map(Number);
    const land = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
    
    for (let j = 0; j < K; j++) {
        const [x, y] = input[idx++].split(' ').map(Number);
        land[y][x]++;
    }
    
    const dfs = (x, y) => {
        if (x >= M || x < 0 || y >= N || y < 0) return;
        if (!land[y][x]) return;
    
        land[y][x]--;
    
        search.forEach(v => {
            dfs(x + v[0], y + v[1]);
        });
    }
    
    let answer = 0;
    
    for (let k = 0; k < N; k++) {
        for (let l = 0; l < M; l++) {
            if (land[k][l]) {
                dfs(l, k);
                answer++;
            }
        }
    }
    
    console.log(answer);
}