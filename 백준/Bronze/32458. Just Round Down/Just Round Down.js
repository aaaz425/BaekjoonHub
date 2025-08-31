const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = parseFloat(input);

const result = Math.trunc(num);

console.log(result);