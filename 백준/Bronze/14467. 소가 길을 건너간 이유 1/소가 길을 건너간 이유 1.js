const fs = require('fs');
const [N, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = Array(11).fill(-1);
let answer = 0;

inputs.forEach(input => {
    const [n, d] = input.split(' ');
    
    if (arr[+n] === 1 && d === '0') {
	      answer++;
    } else if (arr[+n] === 0 && d === '1') {
        answer++;
    }
    
    arr[+n] = +d;
})

console.log(answer);