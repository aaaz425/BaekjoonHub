const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const targets = input[1].split(' ').map(Number);

const deque = [];
for (let i = 1; i <= N; i++) {
  deque.push(i);
}

let answer = 0;

for (const target of targets) {
  const idx = deque.indexOf(target);

  const leftMoves = idx;
  const rightMoves = deque.length - idx;

  if (leftMoves <= rightMoves) {
    answer += leftMoves;
    for (let i = 0; i < leftMoves; i++) {
      deque.push(deque.shift());
    }
  } else {
    answer += rightMoves;
    for (let i = 0; i < rightMoves; i++) {
      deque.unshift(deque.pop());
    }
  }

  deque.shift();
}

console.log(answer);