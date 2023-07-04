function solution(arr) {
    const startPoint = arr.indexOf(2);
    
    if (startPoint === -1) {
        return [-1];
    }
    
    const endPoint = arr.lastIndexOf(2);
    
    return arr.slice(startPoint, endPoint + 1);
}