const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, ...tests] = input;

tests.forEach(test => {
    const index = test.indexOf('D');
    if (index !== -1) {
        console.log(index);
        return;
    } else {
        console.log(test.length);
    }
})