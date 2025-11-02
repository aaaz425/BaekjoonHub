const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input, 10);

let result = [];
for (let i = 1; i <= N; i++) {
  result.push(i);
  if (i % 6 === 0 || i === N) {
    result.push("Go!");
  }
}

console.log(result.join(" "));