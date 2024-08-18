const input = require("fs").readFileSync("/dev/stdin").toString();

// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_11655.txt")
//   .toString()
//   .trim();

let result = "";

for (let i = 0; i < input.length; i++) {
  if (input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 77) {
    result += String.fromCharCode(input[i].charCodeAt() + 13);
  } else if (input[i].charCodeAt() >= 78 && input[i].charCodeAt() <= 90) {
    result += String.fromCharCode(input[i].charCodeAt() - 13);
  } else if (input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 109) {
    result += String.fromCharCode(input[i].charCodeAt() + 13);
  } else if (input[i].charCodeAt() >= 110 && input[i].charCodeAt() <= 122) {
    result += String.fromCharCode(input[i].charCodeAt() - 13);
  } else {
    result += input[i];
  }
}

console.log(result);
