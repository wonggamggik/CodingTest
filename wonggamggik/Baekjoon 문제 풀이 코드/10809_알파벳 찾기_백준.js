const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_10809.txt")
//   .toString()
//   .trim();

let a = new Map();
for (let i = 97; i <= 122; i++) {
  a.set(String.fromCharCode(i), -1);
}

for (let i = 0; i < input.length; i++) {
  if (a.get(input[i]) == -1) {
    a.set(input[i], i);
  }
}

console.log(Array.from(a.values()).join(" "));
