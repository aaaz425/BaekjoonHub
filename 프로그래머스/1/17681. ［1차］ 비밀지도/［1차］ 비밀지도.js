function solution(n, arr1, arr2) {
    const newArr1 = arr1.map((value) => {
        const binVal = value.toString(2);
        const space = ('0').repeat(n - binVal.length);
        return space + binVal;
    });
    
    const newArr2 = arr2.map((value) => {
        const binVal = value.toString(2);
        const space = ('0').repeat(n - binVal.length);
        return space + binVal;
    });
    
    const secretMap = newArr1.map((value, index) => {
        let finalSpace = '';
        
        for (let i = 0; i < value.length; i++) {
            const isBlocked = +value[i] + +newArr2[index][i] > 0;
            
            if (isBlocked) {
                finalSpace += '#';
            } else {
                finalSpace += ' ';
            }
        }
        
        return finalSpace;
    });
    
    return secretMap;
}