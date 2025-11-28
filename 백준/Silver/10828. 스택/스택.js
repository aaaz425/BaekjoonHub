const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const stack = [];
let result = [];

for (let i = 1; i <= N; i++) {
    const cmd = input[i];

    if (cmd.startsWith('push')) {
        const [, x] = cmd.split(' ');
        stack.push(x);
    } else if (cmd === 'pop') {
        result.push(stack.length ? stack.pop() : -1);
    } else if (cmd === 'size') {
        result.push(stack.length);
    } else if (cmd === 'empty') {
        result.push(stack.length ? 0 : 1);
    } else if (cmd === 'top') {
        result.push(stack.length ? stack[stack.length - 1] : -1);
    }
}

console.log(result.join('\n'));