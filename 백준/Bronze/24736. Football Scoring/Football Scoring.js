const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [aT, aF, aS, aP, aC] = A.split(' ').map(Number);
const [bT, bF, bS, bP, bC] = B.split(' ').map(Number);

console.log(aT * 6 + aF * 3 + aS * 2 + aP * 1 + aC * 2);
console.log(bT * 6 + bF * 3 + bS * 2 + bP * 1 + bC * 2);