let input = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux" ? "/dev/stdin" : "baekjoon_11726.txt"
    )
    .toString()
    .trim()
);

/**
 * 문제 변수 - n -> n이 1인경우, 2인 경우 ...
 * -> 가로 길이가 n일때 타일을 채우는 경우는 몇가지인가?
 * 점화식 만들기 - f(n) = -> 모든 부분 문제의 해답이 필요하므로 바텀업을 사용
 * f(1) = 1 -> 1 -> 기저
 * f(2) = 11, 2 -> 2 -> 기저
 * f(3) = 111, 12 -> 3
 * f(4) = 1111, 112, 22 -> 5
 * f(5) = 11111, 1112, 122 -> 8
 * f(6) = 111111, 11112, 1122, 222 -> 13
 * f(7) = 111111, 111112, 11122, 1222 -> 21
 * f(n) = f(n-1) + f(n-2)라는 규칙이 보인다.
 */

let arr = [1, 2];

for (let i = 2; i < input; i++) {
  arr.push((arr[i - 2] + arr[i - 1]) % 10007);
}

console.log(arr[input - 1]);
