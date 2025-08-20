const fs = require("fs");

const input = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [T, ...rest] = input;

const quarter = 25;
const dime = 10;
const nickel = 5;
const penny = 1;

const getQR = (dividend, divisor) => [Math.floor(dividend / divisor), dividend % divisor];

let out = [];
for (let i = 0; i < T; i++) {
  let charge = rest[i];

  const [q, r1] = getQR(charge, quarter);
  const [d, r2] = getQR(r1, dime);
  const [n, r3] = getQR(r2, nickel);
  const [p] = getQR(r3, penny);

  out.push(`${q} ${d} ${n} ${p}`);
}
console.log(out.join("\n"));
