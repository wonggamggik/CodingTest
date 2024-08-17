// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_1158.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr1 = Array.from({ length: input[0] }, (v, i) => i + 1);
const arr2 = [];
const result = [];
let i = 0;

while (arr1.length != 0 || arr2.length != 0) {
  while (arr1.length != 0) {
    i++;
    if (i != input[1]) {
      arr2.push(arr1.shift());
    } else {
      result.push(arr1.shift());
      i = 0;
    }
  }
  while (arr2.length != 0) {
    i++;
    if (i != input[1]) {
      arr1.push(arr2.shift());
    } else {
      result.push(arr2.shift());
      i = 0;
    }
  }
}

console.log(`<${result.join(', ')}>`);
