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

  getMethod(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
}

console.log("--------------");
console.log("Get Method: ");
let getMethodLinkedList = new LinkedList(11);
getMethodLinkedList.push(3);
getMethodLinkedList.push(23);
getMethodLinkedList.push(7);

console.log("Before get: ");
console.log(getMethodLinkedList);
console.log("--------------");

console.log("After get method getting the second index: ");
console.log(getMethodLinkedList.getMethod(2));
console.log("--------------");

console.log("After get method getting the third index: ");
console.log(getMethodLinkedList.getMethod(3));
console.log("--------------");

console.log("After get method getting the undefined index: ");
console.log(getMethodLinkedList.getMethod(4));
console.log("--------------");
