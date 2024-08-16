function solution(N, stages) {
    let players = stages.length
    
    const stageCount = Array(N + 1).fill(0);
    for (let i = 0; i < players; i++) {
        stageCount[stages[i] - 1]++;
    }
    
    const failRates = Array(N).fill(0);
    for (let i = 0; i < stageCount.length - 1; i++) {
        failRates[i] = [stageCount[i] / players, i + 1];
        players -= stageCount[i];
    }
    
    failRates.sort((a, b) => b[0] - a[0]);
    
    return failRates.map(v => v[1]);
}