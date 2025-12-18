const fs = require('fs');
const N = +fs.readFileSync(0, 'utf8').trim();

console.log(Array(N).fill('LoveisKoreaUniversity').join(' '));