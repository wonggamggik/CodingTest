function gcd(a, b) {
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
  .split("\n");

// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_9613.txt")
//   .toString()
//   .trim()
//   .split("\n");

for (let i = 1; i < input.length; i++) {
  let arr = input[i].split(" ").map(Number);
  let result = 0;
  for (let j = 1; j < arr.length - 1; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      result += gcd(arr[j], arr[k]);
    }
  }
  console.log(result);
}
