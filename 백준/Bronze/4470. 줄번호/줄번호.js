const fs = require('fs');
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach((v, i) => {
    console.log(`${i + 1}. ${v}`);
})
