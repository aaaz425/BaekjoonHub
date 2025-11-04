const fs = require("fs");
const N = +fs.readFileSync('/dev/stdin').toString().trim();

let A = [1, 2];

for (let i = 3; i <= N - 1; i++) {
  A.push(i);
}

A.push(997);

console.log(N);
console.log(A.join(" "));