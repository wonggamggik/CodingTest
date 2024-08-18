const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_1978.txt")
//   .toString()
//   .trim()
//   .split("\n");

function solution(n) {
  const arr = Array.from({ length: n + 1 }).fill(true);
  arr[0] = arr[1] = false;
  const sqrt = parseInt(Math.sqrt(n));

  for (let i = 2; i <= sqrt; i++) {
    if (arr[i] === true) {
      for (let j = 2; i * j <= n; j++) {
        arr[i * j] = false;
      }
    }
  }
  return arr;
}

let result = 0;
const arr = input[1].split(" ");
const brr = solution(1001);

for (let i = 0; i < input[0]; i++) {
  if (brr[arr[i]] == true) {
    result += 1;
  }
}

console.log(result);
