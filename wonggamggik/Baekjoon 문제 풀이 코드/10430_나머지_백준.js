const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_10430.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

console.log((input[0] + input[1]) % input[2]);
console.log(((input[0] % input[2]) + (input[1] % input[2])) % input[2]);
console.log((input[0] * input[1]) % input[2]);
console.log(((input[0] % input[2]) * (input[1] % input[2])) % input[2]);
