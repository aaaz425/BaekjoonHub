const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = parseInt(input[0], 10);
for (let i = 1; i <= n; i++) {
  const [area, base] = input[i].trim().split(' ').map(Number);
  const height = (2 * area) / base;
  console.log(`The height of the triangle is ${height.toFixed(2)} units`);
}