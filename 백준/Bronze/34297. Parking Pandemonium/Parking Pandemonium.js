const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

const M = BigInt(input[0]);
const C = BigInt(input[2]);

const result = M * C;
console.log(result.toString());