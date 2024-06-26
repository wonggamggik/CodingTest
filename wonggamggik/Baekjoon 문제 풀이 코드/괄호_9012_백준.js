class Stack {
  constructor() {
    this._arr = [];
  }

  push(item) {
    this._arr.push(item);
  }

  pop() {
    return this._arr.pop();
  }

  check() {
    return this._arr.length == 0;
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

let result = "";

for (let i = 1; i <= Number(input[0]); i++) {
  const str = input[i].trim();
  const splitedStr = str.split("");
  result += checkPS(splitedStr) + "\n";
}

console.log(result.trim());

function checkPS(arr) {
  const stack = new Stack();
  for (element of arr) {
    if (element === "(") {
      stack.push("(");
    } else {
      const check = stack.pop();
      if (check === undefined) {
        return "NO";
      }
    }
  }
  if (stack.check()) {
    return "YES";
  } else {
    return "NO";
  }
}
