class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

console.log("===================");
let myDoublyLinkedList = new DoublyLinkedList(1);

console.log("===================");
console.log("After push method:");
console.log(myDoublyLinkedList.push(2));
console.log("===================");
console.log("After push another number at the end: ");
console.log(myDoublyLinkedList.push(3));
