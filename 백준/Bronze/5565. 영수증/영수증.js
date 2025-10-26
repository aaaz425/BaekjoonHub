const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const total = input[0];
const books = input.slice(1);

const sum = books.reduce((a, b) => a + b, 0);
console.log(total - sum);