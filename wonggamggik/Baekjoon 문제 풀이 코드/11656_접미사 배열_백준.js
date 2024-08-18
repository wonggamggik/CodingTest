// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const input = require("fs")
  .readFileSync("baekjoon_nodejs_11656.txt")
  .toString()
  .trim();

result = [];

for (let i = 0; i < input.length; i++) {
  result.push(input.slice(i));
}

result.sort();

console.log(result.join("\n"));
