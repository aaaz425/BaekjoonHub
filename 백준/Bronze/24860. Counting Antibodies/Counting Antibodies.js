const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

const Vk = BigInt(input[0]);
const Jk = BigInt(input[1]);
const Vl = BigInt(input[2]);
const Jl = BigInt(input[3]);
const Vh = BigInt(input[4]);
const Dh = BigInt(input[5]);
const Jh = BigInt(input[6]);

const light = Vk * Jk + Vl * Jl;
const heavy = Vh * Dh * Jh;
const result = light * heavy;

console.log(result.toString());