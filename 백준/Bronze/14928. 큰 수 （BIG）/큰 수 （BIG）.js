const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const MOD = 20000303;

let res = 0;
for (const ch of input) {
  res = (res * 10 + (ch.charCodeAt(0) - 48)) % MOD;
}

console.log(res);