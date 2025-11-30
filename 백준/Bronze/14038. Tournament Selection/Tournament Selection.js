const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const wins = input.filter(v => v === 'W').length;

let result;
if (wins >= 5) {
    result = 1;
} else if (wins >= 3) {
    result = 2;
} else if (wins >= 1) {
    result = 3;
} else {
    result = -1;
}

console.log(result);