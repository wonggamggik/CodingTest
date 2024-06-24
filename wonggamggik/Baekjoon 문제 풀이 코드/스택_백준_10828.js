class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    if (this._arr.length == 0) {
      return "-1";
    }
    return this._arr.pop();
  }
  top() {
    if (this._arr.length == 0) {
      return "-1";
    }
    return this._arr[this._arr.length - 1];
  }
  size() {
    return this._arr.length;
  }
  empty() {
    if (this._arr.length == 0) {
      return "1";
    }
    return "0";
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const stack = new Stack();
let result = "";

for (let i = 1; i <= input[0]; i++) {
  input[i] = input[i].replace("\r", "");

  if (input[i] === "pop") {
    result = result + stack.pop() + "\n";
  } else if (input[i] === "size") {
    result = result + stack.size() + "\n";
  } else if (input[i] === "empty") {
    result = result + stack.empty() + "\n";
  } else if (input[i] === "top") {
    result = result + stack.top() + "\n";
  } else {
    const pushNum = input[i].split(" ");
    stack.push(pushNum[1]);
  }
}

console.log(result.trim());
