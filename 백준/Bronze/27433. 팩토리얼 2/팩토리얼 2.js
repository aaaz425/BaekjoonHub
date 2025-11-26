const fs = require('fs');
const N = +fs.readFileSync(0, 'utf8').trim();
console.log(Array(N).fill(0).map((_, i) => i + 1).reduce((acc, cur) => acc * cur, 1));