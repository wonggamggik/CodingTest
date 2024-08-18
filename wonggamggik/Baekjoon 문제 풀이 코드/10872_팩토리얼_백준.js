const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

// const input = Number(
//   require("fs").readFileSync("baekjoon_nodejs_10872.txt").toString().trim()
// );
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(input));
