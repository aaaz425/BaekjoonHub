const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const answer = input[1].split(' ').map(Number);
console.log(answer.map(v => v - a * b).join(' '));