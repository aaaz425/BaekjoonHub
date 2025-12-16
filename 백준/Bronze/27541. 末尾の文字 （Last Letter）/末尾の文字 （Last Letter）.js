const fs = require('fs');
const [N, input] = fs.readFileSync(0, 'utf8').trim().split('\n');

if (input[+N - 1] === 'G') {
    console.log(input.slice(0, +N - 1));
} else {
    console.log(`${input}G`);
}