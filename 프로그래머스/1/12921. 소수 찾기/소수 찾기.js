function solution(n) {
    // 에라토스테네스의 체 참고하기

    let arr = Array(n + 1).fill(true);

    arr[0] = false;
    arr[1] = false;

    for(let i = 2; i * i <= n; i++) {
        if(arr[i]) {
            for(let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    return arr.filter(el => el).length;
}