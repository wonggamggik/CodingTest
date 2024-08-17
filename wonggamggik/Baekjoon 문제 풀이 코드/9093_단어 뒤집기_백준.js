const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

let result = "";

for (let i = 1; i <= Number(input[0]); i++) {
  // trim을 통해 다듬은 문자열을 함수에 넣기
  result += editArray(input[i]);
}

console.log(result);

function editArray(arr) {
  /**
   * 하나하나 반복문으로 읽고, 뒤집고, 배열에 추가하는 기능 구현
   */
  const splitedArr = arr.trim().split(" ");
  let reversedStr = "";

  for (const element of splitedArr) {
    reversedStr += reversedElement(element);
    reversedStr += " ";
  }

  reversedStr = reversedStr.trim();
  return reversedStr + "\n";
}

function reversedElement(str) {
  let reversedWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedWord += str[i];
  }
  return reversedWord;
}
