class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head; // temp aponta para o numero a ser retornado
    this.head = this.head.next;
    this.next = null;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }
}

console.log("--------------");
console.log("Shift Method: ");
let shiftMethodLinkedList = new LinkedList(1);
shiftMethodLinkedList.push(2);

console.log("Before shift: ");
console.log(shiftMethodLinkedList);
console.log("--------------");

console.log("After shift: ");
console.log(shiftMethodLinkedList.shift());
console.log(shiftMethodLinkedList);
console.log("--------------");

console.log("Only one item: ");
console.log(shiftMethodLinkedList.shift());
console.log(shiftMethodLinkedList);

console.log("No item at all: ");
console.log(shiftMethodLinkedList.shift());
console.log(shiftMethodLinkedList);
