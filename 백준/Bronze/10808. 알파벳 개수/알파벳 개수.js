const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const answer = Array(26).fill(0);

input.forEach(word => {
    answer[word.charCodeAt() - 97]++;
})

console.log(answer.join(' '));