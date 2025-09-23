const fs = require('fs');
const word = fs.readFileSync('/dev/stdin').toString().trim().split('');
const answer = word.map(v => {
    if (v === v.toUpperCase()) {
        return v.toLowerCase();
    }
    
    return v.toUpperCase();
}).join('');

console.log(answer);