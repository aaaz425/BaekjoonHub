const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(N * 100 >= M ? 'Yes' : 'No');