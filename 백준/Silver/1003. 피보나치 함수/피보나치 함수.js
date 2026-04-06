const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

const T = Number(input[0]);
const nums = input.slice(1).map(Number);

const count0 = Array(41).fill(0);
const count1 = Array(41).fill(0);

count0[0] = 1;
count1[0] = 0;

count0[1] = 0;
count1[1] = 1;

for (let i = 2; i <= 40; i++) {
  count0[i] = count0[i - 1] + count0[i - 2];
  count1[i] = count1[i - 1] + count1[i - 2];
}

let result = [];

for (let n of nums) {
  result.push(`${count0[n]} ${count1[n]}`);
}

console.log(result.join("\n"));