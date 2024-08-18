function euclidean(a, b) {
  while (b != 0) {
    let temp = a;
    a = b;
    b = temp % b;
  }
  return a;
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_2609.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

const yaksu = euclidean(input[0], input[1]);
const baesu = (input[0] * input[1]) / yaksu;

console.log(yaksu);
console.log(baesu);
