const fs = require('fs');

let [A, B] = fs.readFileSync(0, 'utf8').trim().split(' ');
A = BigInt(A);
B = BigInt(B);

console.log((A + B).toString());