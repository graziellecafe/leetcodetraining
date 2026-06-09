class Node {
  constructor(value) {
    this.data = value;
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

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
}

console.log("Method Pop: ");
console.log("Create the Linked List:");
let myLinkedList = new LinkedList(11);
myLinkedList.push(3);
myLinkedList.push(23);
myLinkedList.push(7);
myLinkedList.push(4);

console.log(myLinkedList);
console.log("-----------");

console.log("Pop the last node:");
myLinkedList.pop();
console.log(myLinkedList);
