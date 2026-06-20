class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
}

const myFirstQueue = new Queue(11);
console.log("---------");
console.log("Queue:");
console.log(myFirstQueue);
console.log("---------");
console.log("enqueue:");
console.log(myFirstQueue.enqueue(3));
console.log(myFirstQueue.enqueue(23));
console.log(myFirstQueue.enqueue(7));
