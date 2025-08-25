const fs = require('fs');
const [T, ...input] = fs.readFileSync('/dev/stdin').toString().trim().toLowerCase().split('\n');

input.forEach((cipher) => {
    const freq = {};

    for (const ch of cipher) {
        if (ch >= 'a' && ch <= 'z') {
            freq[ch] = (freq[ch] || 0) + 1;
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
});