const fs = require('fs');
const [a, b, c, d] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(a * b + c * d);