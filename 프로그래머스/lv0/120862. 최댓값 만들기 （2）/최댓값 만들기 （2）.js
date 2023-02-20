function solution(numbers) {
    let arr = [...numbers]
    arr.sort((a, b) => a - b);
    return arr[0] * arr[1] >= arr[arr.length-1] * arr[arr.length-2] ? 
           arr[0] * arr[1] : arr[arr.length-1] * arr[arr.length-2];
}