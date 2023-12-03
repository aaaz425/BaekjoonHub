function solution(arr, query) {
    query.forEach((value, index) => {
        if (index % 2 === 0) {
            arr.splice(value + 1);
        } else {
            arr.splice(0, value);
        }
    })
    
    return arr;
}