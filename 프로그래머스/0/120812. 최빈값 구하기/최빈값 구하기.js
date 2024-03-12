function solution(array) {
    const set = [...new Set(array)];
    const setCount = set.map(num => array.filter(n => n === num).length);
    const maxCount = Math.max(...setCount);
    const maxCountFirstIdx = setCount.indexOf(maxCount);
    const maxCountLastIdx = setCount.lastIndexOf(maxCount);
    
    return maxCountFirstIdx === maxCountLastIdx ? set[maxCountFirstIdx] : -1;
}