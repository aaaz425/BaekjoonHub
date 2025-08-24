const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.sort((a, b) => a - b);

input.forEach(val => console.log(val));