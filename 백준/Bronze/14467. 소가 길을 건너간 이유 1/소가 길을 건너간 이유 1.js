const fs = require('fs');
const [N, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = Array(11).fill(-1);
let answer = 0;

inputs.forEach(input => {
    const [n, d] = input.split(' ');
    
    if (d === '0' && arr[+n] === 1) {
        answer++;
    } else if (d === '1' && arr[+n] === 0) {
        answer++;
    }
    
    arr[+n] = +d;
})

console.log(answer);