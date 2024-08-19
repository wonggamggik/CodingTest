const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

// const input = Number(
//   require("fs").readFileSync("baekjoon_nodejs_1676.txt").toString().trim()
// );

let result = 0;

for (let i = 5; i <= input; i += 5) {
  a = i;
  while (true) {
    if (a % 5 == 0) {
      a /= 5;
      result += 1;
    } else {
      break;
    }
  }
}

console.log(result);
