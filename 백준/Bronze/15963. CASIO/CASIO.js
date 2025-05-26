const fs = require('fs');
const [a, b] = fs.readFileSync('dev/stdin').toString().trim().split(' ');

if (a == b) {
    console.log(1);
} else {
    console.log(0);
}
