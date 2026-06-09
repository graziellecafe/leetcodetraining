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

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}
console.log("----------------");
console.log("Linked List before remove a node: ");
const myLinkedList = new LinkedList(1);
console.log("----------------");
console.log("Push new number: ");
console.log(myLinkedList.push(2));
console.log(myLinkedList.push(3));
console.log(myLinkedList);

console.log("----------------");
console.log("Remove number in the linked list at beggining: ");
console.log(myLinkedList.remove(0));

console.log("----------------");
console.log("Remove number in the linked list at the end: ");
console.log(myLinkedList.remove(2));
console.log(myLinkedList);
