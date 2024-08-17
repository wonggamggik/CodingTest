const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_10820.txt")
//   .toString()
//   .split("\n");

for (let i = 0; i < input.length; i++) {
  const a = [0, 0, 0, 0];

  if (input[i].length == 0) {
    continue;
  }

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j].charCodeAt() >= 97 && input[i][j].charCodeAt() <= 122) {
      a[0] += 1;
    } else if (
      input[i][j].charCodeAt() >= 65 &&
      input[i][j].charCodeAt() <= 90
    ) {
      a[1] += 1;
    } else if (
      input[i][j].charCodeAt() >= 48 &&
      input[i][j].charCodeAt() <= 57
    ) {
      a[2] += 1;
    } else if (input[i][j] === " ") {
      a[3] += 1;
    }
  }
  console.log(a.join(" "));
}
