function solution(arr) {
    const stk = [arr[0]];
    
    for(let i = 1;i < arr.length; i++){
        stk[stk.length-1] === arr[i] ? stk.pop() : stk.push(arr[i]);
    }
    
    return stk.length ? stk : [-1];
}