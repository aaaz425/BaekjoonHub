function solution(s) {
    const arr = s.split(" ");
    const sum = arr
    .filter(v => v !== "Z")
    .reduce((acc, cur) => +acc + +cur, 0);
    let subtract = 0;
    arr
    .forEach((v, i) => v === "Z" ? subtract += +arr[i-1] : subtract)
    return sum - subtract;
}