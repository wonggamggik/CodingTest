class Stack {
  constructor() {
    this.size = 0;
    this.result = 0;
  }

  push() {
    this.size += 1;
  }

  pop() {
    this.size -= 1;
    this.result += 1;
  }
  plus() {
    this.result += this.size;
  }
}

let input = require("fs").readFileSync("/dev/stdin").toString().trim();
// let input = require("fs")
//   .readFileSync("baekjoon_nodejs_10799.txt")
//   .toString()
//   .trim();

input = input.replaceAll("()", "|");

const st = new Stack();

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    st.push();
  } else if (input[i] === ")") {
    st.pop();
  } else if (input[i] === "|") {
    st.plus();
  }
}

console.log(st.result);
