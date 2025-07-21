function solution(n, lost, reserve) {
    const realLost = lost.filter(l => !reserve.includes(l));
    const realReserve = reserve.filter(r => !lost.includes(r));
    
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);
    
    let ableToAttend = n - realLost.length;

    for (let i = 0; i < realLost.length; i++) {
        const student = realLost[i];
        const front = realReserve.indexOf(student - 1);
        const back = realReserve.indexOf(student + 1);

        if (front !== -1) {
            realReserve.splice(front, 1);
            ableToAttend++;
        } else if (back !== -1) {
            realReserve.splice(back, 1);
            ableToAttend++;
        }
    }

    return ableToAttend;
}