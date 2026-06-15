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
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(0);

console.log("===================");
console.log("After push method:");
console.log(myDoublyLinkedList.push(1));

console.log("===================");
console.log("After push another number at the end: ");
console.log(myDoublyLinkedList.push(2));

console.log("===================");
console.log("After push another number at the end: ");
console.log(myDoublyLinkedList.push(3));

console.log("===================");
console.log("Get method with index 1: ");
console.log(myDoublyLinkedList.get(1));

console.log("===================");
console.log("Get method with index 3: ");
console.log(myDoublyLinkedList.get(3));
