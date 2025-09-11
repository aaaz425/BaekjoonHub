const fs = require('fs');
const [r, s] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log((r * 8 + s * 3) - 28);