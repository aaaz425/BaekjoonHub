const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

let sum = 0;

for (let i = 0; i < 5; i++) {
  sum += input[i] ** 2;
}

console.log(sum % 10);