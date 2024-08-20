const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_17103.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number);

function eratos(n) {
  let m = new Map();
  for (let i = 2; i <= n; i++) {
    m.set(i, i);
  }
  const sqrt = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= sqrt; i++) {
    if (m.get(i) !== undefined) {
      for (let j = i * i; j <= n; j += i) {
        m.delete(j);
      }
    }
  }

  return m;
}

const m2 = eratos(1000000);

for (let i = 1; i <= input[0]; i++) {
  let result = 0;
  for (const [key, value] of m2) {
    if (key <= input[i] / 2) {
      if (input[i] == key + m2.get(input[i] - key)) {
        // console.log(key, m2.get(input[i] - key));
        result += 1;
      }
    } else {
      break;
    }
  }
  console.log(result);
  // console.log(
  //   `약 ${
  //     Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100
  //   } MB의 메모리를 사용중입니다.`
  // );
}
