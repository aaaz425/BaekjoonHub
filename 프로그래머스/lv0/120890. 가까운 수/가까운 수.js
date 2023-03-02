function solution(array, n) {
    array.push(n);
    const indexN = array.sort((a,b) => a - b).indexOf(n);
    if (indexN === 0) {
        return array[indexN + 1];
    } else if (indexN === array.length - 1) {
        return array[indexN - 1];
    } else {
        return array[indexN] - array[indexN - 1] <= array[indexN + 1] - array[indexN] ? array[indexN - 1] : array[indexN + 1];    
    }
}