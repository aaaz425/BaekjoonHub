const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input[0].trim().split(" ").map(Number);
const [C, D] = input[1].trim().split(" ").map(Number);

const hanyang = A + C;
const yongdap = B + D;

if (hanyang < yongdap) {
  console.log("Hanyang Univ.");
} else if (hanyang > yongdap) {
  console.log("Yongdap");
} else {
  console.log("Either");
}