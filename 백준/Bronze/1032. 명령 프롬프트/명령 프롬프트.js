const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const [n, ...files] = input;
let answer = "";

for (let i = 0; i < files[0].length; i++) {
  if (files.every((file) => file[i] === files[0][i])) {
    answer += files[0][i];
  } else {
    answer += "?";
  }
}

console.log(answer);
