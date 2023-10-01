function solution(n) {
    const nArr = Array.from({length: n}, (_, i) => i + 1);
    const filteredArr = nArr.filter(value => value % 2 === 0);
    const sumOfArr = filteredArr.reduce((acc, cur) => acc + cur, 0);
    
    return sumOfArr;
}