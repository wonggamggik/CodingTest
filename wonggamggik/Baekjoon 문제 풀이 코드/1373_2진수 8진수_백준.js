let input = require("fs").readFileSync("/dev/stdin").toString().trim();
// let input = require("fs")
//   .readFileSync("baekjoon_nodejs_1373.txt")
//   .toString()
//   .trim();

if (input.length % 3 == 1) {
  input = "00" + input;
} else if (input.length % 3 == 2) {
  input = "0" + input;
}

const a = new Map();
a.set("000", "0");
a.set("001", "1");
a.set("010", "2");
a.set("011", "3");
a.set("100", "4");
a.set("101", "5");
a.set("110", "6");
a.set("111", "7");

let result = "";

for (let i = 0; i < input.length; i += 3) {
  result += a.get(input[i] + input[i + 1] + input[i + 2]);
}

console.log(result);
