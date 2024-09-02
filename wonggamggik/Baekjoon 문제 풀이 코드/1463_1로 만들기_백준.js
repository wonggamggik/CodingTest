const input = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux" ? "/dev/stdin" : "baekjoon_1463.txt"
    )
    .toString()
    .trim()
);

/**
 * 문제 변수는 n -> 현재 숫자
 * f(1) = 1 => 1 - 기저
 * f(2) = 2 - 1 => 1 - 기저
 * f(3) = 3 - 1 => 1 - 기저
 * f(4) = 4 - 2 - 1 => 2
 * f(5) = 5 - 4 - 2 - 1 => 3
 * f(6) = 6 - 2 - 1 => 2
 * f(7) = 7 - 6 - 2 - 1 => 3
 * 점화식 -> f(n) = min(f(n-1) + 1, f(n/2) + 1, f(n/3) + 1)
 *
 */

let arr = [0, 0];

for (let i = 2; i <= input; i++) {
  const a = arr[i - 1] + 1;
  const b = i % 2 == 0 ? arr[i / 2] + 1 : Infinity;
  const c = i % 3 == 0 ? arr[i / 3] + 1 : Infinity;
  arr.push(Math.min(a, b, c));
}

console.log(arr[input]);
