const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_11576.txt")
//   .toString()
//   .trim()
//   .split("\n");

const time = input[0].split(" ").map(Number);

let ten = 0;

const num = input[2].split(" ").map(Number);

let j = 0;
for (let i = num.length - 1; i >= 0; i--) {
  ten += num[i] * time[0] ** j;
  j++;
}

let now = [];
while (Math.floor(ten / time[1]) != 0) {
  now.push(ten % time[1]);
  ten = Math.floor(ten / time[1]);
}
now.push(ten % time[1]);

console.log(now.reverse().join(" "));
