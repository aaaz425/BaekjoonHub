function solution(strArr) {
    const lengArr = strArr.map(str => {
        return str.length;
    });
    
    const setArr = [...new Set(lengArr)];
    
    const answerArr = setArr
        .map((key, idx) => {
            return lengArr.filter(value => value === setArr[idx]).length
        })
    
    return Math.max(...answerArr);
}