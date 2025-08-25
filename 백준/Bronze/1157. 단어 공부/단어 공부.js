const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

const freq = {};

for (let i = 0; i < input.length; i++) {
    if (input[i] >= 'A' && input[i] <= 'Z') {
        freq[input[i]] = (freq[input[i]] || 0) + 1;
    }
}

let maxFreq = 0;
let maxChar = '';
let isDuplicate = false;

for (const ch in freq) {
    if (freq[ch] > maxFreq) {
        maxFreq = freq[ch];
        maxChar = ch;
        isDuplicate = false;
    } else if (freq[ch] === maxFreq) {
        isDuplicate = true;
    }
}

console.log(isDuplicate ? '?' : maxChar);
