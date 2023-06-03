function solution(a, d, included) {
    return Array.from({length: included.length}, (_, i) => a + (i * d))
        .filter((v, i) => {
            return included[i];
        })
        .reduce((acc, cur) => acc + cur, 0)
}