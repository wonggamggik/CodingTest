function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  const prime = arr
    .map((isPrime, index) => (isPrime ? index : null))
    .filter((index) => index != null);

  return prime;
}

let input = Number(
  require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "baekjoon_nodejs_11653.txt")
    .toString()
    .trim()
);
const prime = solution(10000000);

let i = 0;
while (input != 1) {
  if (input % prime[i] !== 0) {
    i++;
  } else {
    input = input / prime[i];
    console.log(prime[i]);
  }
}
