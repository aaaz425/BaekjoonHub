const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(input.some(v => v === '9') ? 'F' : 'S');