const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

const [S, D] = input;

const x = (S + D) / 2;
const y = (S - D) / 2;

if (
  (S + D) % 2 !== 0 ||
  (S - D) % 2 !== 0 ||
  x < 0 ||
  y < 0
) {
  console.log(-1);
} else {
  console.log(x, y);
}