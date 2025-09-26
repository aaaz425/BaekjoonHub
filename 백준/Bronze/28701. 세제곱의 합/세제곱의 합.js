const fs = require('fs');
const N = fs.readFileSync('/dev/stdin').toString().trim();

console.log(Array(+N).fill(0).map((_, i) => i + 1).reduce((acc, cur) => acc + cur, 0));
console.log(Array(+N).fill(0).map((_, i) => i + 1).reduce((acc, cur) => acc + cur, 0) ** 2);
console.log(Array(+N).fill(0).map((_, i) => (i + 1) ** 3).reduce((acc, cur) => acc + cur, 0));