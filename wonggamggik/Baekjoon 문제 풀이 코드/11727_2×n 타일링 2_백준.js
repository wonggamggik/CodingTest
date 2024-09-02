const input = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux" ? "/dev/stdin" : "baekjoon_11727.txt"
    )
    .toString()
    .trim()
);

/**
 * 이전의 문제에서 2를 0으로 교체 가능하게 된 것 뿐
 * 문제 변수 = n -> 가로*2에서 가로의 길이
 * 1 - 1 -> 1 기저상태
 * 2 - 11,2,0 -> 3
 * 3 - 111, 12, 10 -> 5
 * 4 - 1111, 112, 110, 22, 00, 20 -> 11
 * 5 - 11111, 1112, 1110, 122, 100, 120 -> 21
 * 6 - 111111, 11112, 11110, 1122, 1100, 1120, 222, 220, 200, 000 - 43
 *
 * 점화식   => n이 짝수일 경우: f(n) = 2 * f(n-1) + 1
 *         => n이 홀수일 경우: f(n) = 2 * f(n-1) - 1
 */

function nOdd(arr, n) {
  return (2 * arr[n - 1] - 1) % 10007;
}

function nEver(arr, n) {
  return (2 * arr[n - 1] + 1) % 10007;
}

let arr = [0, 1];

for (let i = 2; i <= input; i++) {
  arr.push(i % 2 == 0 ? nEver(arr, i) : nOdd(arr, i));
}

console.log(arr[input]);
