const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [r, c] = input;

for(let i = 0; i < +r; i++) {
    console.log('*'.repeat(+c));
}