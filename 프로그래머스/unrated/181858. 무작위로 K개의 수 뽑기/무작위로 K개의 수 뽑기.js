function solution(arr, k) {
    const newArr = [...new Set(arr)].slice(0, k);
    
    while(newArr.length < k) {
        newArr.push(-1);
    }
    
    return newArr;
}