const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const queue = [];
let head = 0;

let answer = [];

for (let i = 1; i <= n; i++) {
    const [cmd, x] = input[i].split(' ');

    switch (cmd) {
        case 'push':
            queue.push(x);
            break;

        case 'pop':
            if (head === queue.length) {
                answer.push(-1);
            } else {
                answer.push(queue[head]);
                head++;
            }
            break;

        case 'size':
            answer.push(queue.length - head);
            break;

        case 'empty':
            answer.push(head === queue.length ? 1 : 0);
            break;

        case 'front':
            answer.push(head === queue.length ? -1 : queue[head]);
            break;

        case 'back':
            answer.push(head === queue.length ? -1 : queue[queue.length - 1]);
            break;
    }
}

console.log(answer.join('\n'));