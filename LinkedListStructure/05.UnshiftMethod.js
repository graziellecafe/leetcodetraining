class Node {
  constructor(value) {
    this.value = value;
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

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

console.log("Unshift Method: ");
console.log("--------------- ");

let unshiftMethodLinkedList = new LinkedList(11);
unshiftMethodLinkedList.push(3);
unshiftMethodLinkedList.push(23);
unshiftMethodLinkedList.push(7);

console.log("Before unshift: ");
console.log(unshiftMethodLinkedList);
console.log("--------------- ");

unshiftMethodLinkedList.unshift(4);
console.log("After unshift: ");
console.log(unshiftMethodLinkedList);
