const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const bigA = BigInt(A);
const bigB = BigInt(B);

console.log((bigA * bigB).toString());