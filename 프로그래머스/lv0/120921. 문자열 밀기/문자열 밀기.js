function solution(A, B) {
    const arrA = [...A];
    let count = 0;
    for(let i = 0; i < A.length; i++) {
        if(arrA.join("") === B) {
            return count;
        }
        arrA.unshift(arrA[arrA.length - 1]);
        arrA.pop();
        count++;
    }
    return -1;
}