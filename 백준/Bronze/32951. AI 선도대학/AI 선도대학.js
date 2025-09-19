const fs = require('fs');
const year = fs.readFileSync('/dev/stdin').toString().trim();

console.log(+year - 2024);