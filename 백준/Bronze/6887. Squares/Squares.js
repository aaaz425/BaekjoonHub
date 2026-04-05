const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8').trim();
console.log(`The largest square has side length ${Math.floor(Math.sqrt(n))}.`);