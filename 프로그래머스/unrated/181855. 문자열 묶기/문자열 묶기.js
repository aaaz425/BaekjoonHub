function solution(strArr) {
    const group = [];
    
    const lengArr = strArr.map(str => {
        return str.length;
    });
    
    const setArr = [...new Set(lengArr)];
    
    return Math.max(...setArr.map((key, idx) => lengArr.filter(value => value === setArr[idx]).length));
}