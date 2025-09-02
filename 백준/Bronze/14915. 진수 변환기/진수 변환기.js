const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').toString().trim().split(/\s+/).map(Number);
const [A, B] = data;

if (A === 0) {
  console.log('0');
  process.exit(0);
}

const DIGITS = '0123456789ABCDEF';
let n = A;
let res = [];

while (n > 0) {
  res.push(DIGITS[n % B]);
  n = Math.floor(n / B);
}

console.log(res.reverse().join(''));