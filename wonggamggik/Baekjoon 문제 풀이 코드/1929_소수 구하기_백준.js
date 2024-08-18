const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_1929.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

function solution(n) {
  const arr = Array(n + 1).fill(true);
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

const arr = solution(input[1]);

for (let i = input[0]; i <= input[1]; i++) {
  if (arr[i] === true) {
    console.log(i);
  }
}
