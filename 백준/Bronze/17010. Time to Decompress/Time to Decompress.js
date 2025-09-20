const fs = require('fs');
const [n, ...rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

rest.forEach(dec => {
    const [a, b] = dec.split(' ');
    
    console.log(b.repeat(+a));
})