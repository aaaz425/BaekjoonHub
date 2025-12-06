const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf8').trim());

console.log(N - 1946);