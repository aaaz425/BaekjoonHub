function solution(n) {
    let answer = 0;
    let arr = [0, 1, 2];

    for (let i = 3; i <= n; i++){
        arr.push((arr[i - 2] + arr[i - 1]) % 1234567);
    }
    
    return arr[n];
}