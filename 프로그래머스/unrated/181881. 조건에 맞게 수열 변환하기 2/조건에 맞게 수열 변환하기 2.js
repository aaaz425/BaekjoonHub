function solution(arr) {
    let count = 0;
    let isSameArr = false;
    
    let baseArr = [...arr];
    let newArr = [];
    
    while(!isSameArr) {
        newArr = baseArr.map(value => {
            if (value % 2 === 0 && value >= 50) {
                return value / 2;   
            } else if (value % 2 === 1 && value < 50) {
                return value * 2 + 1;
            } else {
                return value;
            }
        });
        
        if (baseArr.join('') == newArr.join('')) {
            isSameArr = true;
            return count;
        }
        
        baseArr = [...newArr];
        count++;
    }
    
    return count;
}