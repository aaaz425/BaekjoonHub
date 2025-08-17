const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const M = Number(input[2]);
const targets = input[3].split(" ").map(Number);

A.sort((a, b) => a - b);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return 1;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return 0;
}

let result = [];
for (let t of targets) {
  result.push(binarySearch(A, t));
}

console.log(result.join("\n"));