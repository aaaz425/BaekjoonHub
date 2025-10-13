const fs = require('fs');
const [r, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const area = r * c;
const capacity = 24200;
const result = Math.ceil(area / capacity);

console.log(result);