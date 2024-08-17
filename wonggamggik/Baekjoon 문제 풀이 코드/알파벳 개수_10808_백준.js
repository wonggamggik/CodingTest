const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_10808.txt")
//   .toString()
//   .trim()
//   .split("");

let a = new Map();
for (let i = 97; i <= 122; i++) {
  a.set(String.fromCharCode(i), 0);
}

for (let i = 0; i < input.length; i++) {
  a.set(input[i], a.get(input[i]) + 1);
}

console.log(Array.from(a.values()).join(" "));
