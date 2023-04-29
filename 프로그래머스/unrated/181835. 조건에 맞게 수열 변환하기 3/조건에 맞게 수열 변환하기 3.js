function solution(arr, k) {
    return arr.map(v => {
        if (k % 2 === 1) {
            return v * k;
        } else {
            return v + k;
        }
    })
}