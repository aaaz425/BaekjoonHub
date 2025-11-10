const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8').trim());
const MOD = 45678n;

const result = ((n + 1n) * (3n * n + 2n) / 2n) % MOD;
console.log(result.toString());