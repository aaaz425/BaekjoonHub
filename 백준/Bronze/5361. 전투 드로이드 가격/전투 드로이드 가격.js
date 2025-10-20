const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const prices = [350.34, 230.90, 190.55, 125.30, 180.90];
const n = +input[0];

for (let i = 1; i <= n; i++) {
  const nums = input[i].split(' ').map(Number);
  const total = nums.reduce((sum, cnt, idx) => sum + cnt * prices[idx], 0);
  console.log(`$${total.toFixed(2)}`);
}