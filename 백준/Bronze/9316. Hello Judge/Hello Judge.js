const fs = require('fs');
const input = +fs.readFileSync(0, 'utf8').trim();

for (let i = 0; i < input; i++) {
    console.log(`Hello World, Judge ${i + 1}!`);
}