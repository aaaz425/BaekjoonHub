const fs = require('fs');
const [red, green, blue] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(red * 3 + green * 4 + blue * 5);