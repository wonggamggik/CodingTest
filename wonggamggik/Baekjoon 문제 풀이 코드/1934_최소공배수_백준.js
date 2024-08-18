function euclid(a, b) {
  while (b != 0) {
    temp = a;
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
//   .readFileSync("baekjoon_nodejs_1934.txt")
//   .toString()
//   .trim()
//   .split("\n");

for (let i = 1; i < input.length; i++) {
  const a = input[i].split(" ").map(Number);
  console.log((a[0] * a[1]) / euclid(a[0], a[1]));
}
