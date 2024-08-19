const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_1212.txt")
//   .toString()
//   .trim();

const a = ["000", "001", "010", "011", "100", "101", "110", "111"];

let result = "";
for (let i = 0; i < input.length; i++) {
  result += a[input[i]];
}

if (result[0] === "0" && result[1] === "0") {
  console.log(result.substring(2));
} else if (result[0] === "0" && result[1] === "1") {
  console.log(result.substring(1));
} else {
  console.log(result);
}
