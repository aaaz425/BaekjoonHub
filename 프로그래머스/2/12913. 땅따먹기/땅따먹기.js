function solution(land) {
    const n = land.length;
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 4; j++) {
            let max = 0;
            for (let k = 0; k < 4; k++) {
                if (k !== j) {
                    max = Math.max(max, land[i - 1][k]);
                }
            }
            land[i][j] += max;
        }
    }

    return Math.max(...land[n - 1]);
}