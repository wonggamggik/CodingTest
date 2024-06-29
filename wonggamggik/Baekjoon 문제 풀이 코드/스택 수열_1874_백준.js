class Stack {
  constructor() {
    this._arr = [0];
  }

  push(item) {
    this._arr.push(item);
  }

  pop() {
    return this._arr.pop();
  }

  top() {
    return this._arr[this._arr.length - 1];
  }
}

// 현재 입력확인 값 vs myStack 값
// myStack[myStack] <= 입력확인값 => true
//    myStack < 입력확인값 => push(item);
//    myStack == 입력확인값 => pop();
// myStack > 입력확인값 => true => result = "NO";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const myStack = new Stack();
let item = 1;
let result = "";

for (let i = 1; i <= input[0]; i++) {
  if (myStack.top() < input[i]) {
    for (item; item <= input[i]; item++) {
      myStack.push(item);
      result += "+\n";
    }
    myStack.pop();
    result += "-\n";
  } else if (myStack.top() == input[i]) {
    myStack.pop();
    result += "-\n";
  } else {
    result = "NO";
    break;
  }
}

console.log(result);
