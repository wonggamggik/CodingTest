class Deque {
  constructor() {
    this.arr = [];
  }
  push_front(item) {
    this.arr = [item, ...this.arr];
  }
  push_back(item) {
    this.arr = [...this.arr, item];
  }
  pop_front() {
    if (this.arr.length == 0) {
      console.log(-1);
    } else {
      const temp = this.arr[0];
      this.arr = this.arr.slice(1);
      console.log(temp);
    }
  }
  pop_back() {
    if (this.arr.length == 0) {
      console.log(-1);
    } else {
      const temp = this.arr[this.arr.length - 1];
      this.arr = this.arr.slice(0, -1);
      console.log(temp);
    }
  }
  size() {
    console.log(this.arr.length);
  }
  empty() {
    console.log(this.arr.length == 0 ? 1 : 0);
  }
  front() {
    console.log(this.arr.length == 0 ? -1 : this.arr[0]);
  }
  back() {
    console.log(this.arr.length == 0 ? -1 : this.arr[this.arr.length - 1]);
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const input = require("fs")
//   .readFileSync("baekjoon_nodejs_10866.txt")
//   .toString()
//   .trim()
//   .split("\n");

const de = new Deque();

for (let i = 1; i <= input[0]; i++) {
  const arr = input[i].trim().split(" ");
  if (arr[0] === "push_front") {
    de.push_front(arr[1]);
  } else if (arr[0] === "push_back") {
    de.push_back(arr[1]);
  } else if (arr[0] === "pop_front") {
    de.pop_front();
  } else if (arr[0] === "pop_back") {
    de.pop_back();
  } else if (arr[0] === "size") {
    de.size();
  } else if (arr[0] === "empty") {
    de.empty();
  } else if (arr[0] === "front") {
    de.front();
  } else if (arr[0] === "back") {
    de.back();
  }
}
