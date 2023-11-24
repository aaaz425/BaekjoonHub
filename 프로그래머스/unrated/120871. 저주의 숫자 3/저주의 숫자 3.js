function solution(n) {
    const thousandsArr = Array.from({length: n * 3}, (_, i) => i + 1);
    const filteredArr = thousandsArr.filter((num) => {
        if (num % 3 === 0) {
            return false;
        }
        
        if (num.toString().includes('3')) {
            return false;
        }
        
        return true;
    })
          
    return filteredArr[n - 1];
}