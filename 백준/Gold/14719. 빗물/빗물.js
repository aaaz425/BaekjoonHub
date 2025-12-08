const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [H, W] = input[0].split(' ').map(Number);
const blocks = input[1].split(' ').map(Number);

let leftMax = Array(W).fill(0);
let rightMax = Array(W).fill(0);

leftMax[0] = blocks[0];
for (let i = 1; i < W; i++) {
    leftMax[i] = Math.max(leftMax[i], leftMax[i - 1], blocks[i]);
}

rightMax[W - 1] = blocks[W - 1];
for (let i = W - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i], rightMax[i + 1], blocks[i]);
}

let result = 0;
for (let i = 0; i < W; i++) {
    const water = Math.min(leftMax[i], rightMax[i]) - blocks[i];
    if (water > 0) result += water;
}

console.log(result);