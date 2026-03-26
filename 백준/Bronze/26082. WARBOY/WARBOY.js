const fs = require('fs');
const [A, B, C] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
console.log(B / A * 3 * C);