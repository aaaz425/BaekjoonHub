const fs = require('fs');
const [n, ...input] = fs.readFileSync(0, 'utf8').trim().split('\n');
input.forEach(v => {
    console.log(`${v} ${v}`);
})