const fs = require('fs');
const [h, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log((h - 9) * 60 + m);