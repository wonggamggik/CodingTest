class Queue {
  constructor() {
    this._arr = [];
  }

  push(item) {
    if (this._arr.length != 0) {
      this._arr[this._arr.length] = item;
    } else {
      this._arr[0] = item;
    }
  }

  pop() {
    if (this._arr.length == 0) {
      return -1;
    } else {
      const ret = this._arr[0];
      this._arr = this._arr.slice(1);
      return ret;
    }
  }

  size() {
    return this._arr.length;
  }

  empty() {
    return this._arr.length == 0 ? 1 : 0;
  }

  front() {
    return this._arr.length != 0 ? this._arr[0] : -1;
  }

  back() {
    return this._arr.length != 0 ? this._arr[this._arr.length - 1] : -1;
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const que = new Queue();

for (let i = 1; i <= input[0]; i++) {
  let a = input[i].trim().split(" ");
  if (a[0] === "push") {
    que.push(a[1]);
  } else if (a[0] === "pop") {
    console.log(que.pop());
  } else if (a[0] === "size") {
    console.log(que.size());
  } else if (a[0] === "empty") {
    console.log(que.empty());
  } else if (a[0] === "front") {
    console.log(que.front());
  } else if (a[0] === "back") {
    console.log(que.back());
  }
}
