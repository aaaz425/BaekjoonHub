const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const [a, b, c] = input;
if (+a + +b === +c) {
    console.log('correct!');
} else {
    console.log('wrong!');
}