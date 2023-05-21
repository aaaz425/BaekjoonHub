function solution(arr, n) {
    return arr.map((v, i) => {
        if (arr.length % 2 === 1) {
            if (i % 2 !== 1) {
                return v += n;
            } else {
                return v;
            }
        } else {
            if (i % 2 === 1) {
                return v += n;
            } else {
                return v;
            }
        }
    })
}