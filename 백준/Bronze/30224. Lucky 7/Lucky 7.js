const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const num = Number(input);

const isMultiple = num % 7 === 0;
const hasSeven = input.includes('7');

if (isMultiple && hasSeven) {
    console.log(3);
} else if (!isMultiple && hasSeven) {
    console.log(2);
} else if (isMultiple && !hasSeven) {
    console.log(1);
} else {
    console.log(0);
}