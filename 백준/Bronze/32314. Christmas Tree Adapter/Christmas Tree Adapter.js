const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [w, v] = b.split(' ').map(Number);

console.log(+a <= w / v ? 1 : 0);