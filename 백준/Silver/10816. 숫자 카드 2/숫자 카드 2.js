const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const cards = input[1].split(" ");
const M = Number(input[2]);
const targets = input[3].split(" ");
const obj = {};

for (const card of cards) {
  if (card in obj) {
    obj[card]++;
  } else {
    obj[card] = 1;
  }
}

const result = [];

for (const target of targets) {
  if (target in obj) {
    result.push(obj[target]);
  } else {
    result.push(0);
  }
}

console.log(result.join(" "));
