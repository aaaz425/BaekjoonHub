const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

const [N, C, P] = input;
console.log(N * P);