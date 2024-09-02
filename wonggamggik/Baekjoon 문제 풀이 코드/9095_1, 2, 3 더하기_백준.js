const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "baekjoon_9095.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

/**
 * parameter는 n 하나 -> 정수 n
 * f(n) = f(n-1) + f(n-2) + f(n-3)
 * f(1) = 1 => 1
 * f(2) = 11,2 => 2
 * f(3) = 111, 12, 3 => 4
 * f(4) = 1111, 112, 13, 22 => 7
 * f(5) = 11111, 1112, 113, 122, 23 => 13
 * f(6) = 111111, 11112, 1113, 1122, 123, 222, 33 => 24
 */
let arr = [0, 1, 2, 4];

for (let j = 4; j <= 11; j++) {
  arr.push(arr[j - 3] + arr[j - 2] + arr[j - 1]);
}

for (let i = 1; i <= input[0]; i++) {
  console.log(arr[input[i]]);
}
