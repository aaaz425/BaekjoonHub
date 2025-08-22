const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const prices = input.slice(1).map(line => line.split(" ").map(Number));

let minPackagePrice = Infinity;
let minSinglePrice = Infinity;

for (let i = 0; i < M; i++) {
  const [packagePrice, singlePrice] = prices[i];
  if (packagePrice < minPackagePrice) minPackagePrice = packagePrice;
  if (singlePrice < minSinglePrice) minSinglePrice = singlePrice;
}

const option1 = Math.ceil(N / 6) * minPackagePrice;
const option2 = N * minSinglePrice;
const option3 = Math.floor(N / 6) * minPackagePrice + (N % 6) * minSinglePrice;

console.log(Math.min(option1, option2, option3));