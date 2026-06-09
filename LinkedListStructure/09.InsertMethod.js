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

  unshift(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;

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

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
}

console.log("----------------");
console.log("Linked List before insert new node: ");
const myLinkedList = new LinkedList(1);
console.log(myLinkedList);

console.log("----------------");
console.log("Push new number: ");
console.log(myLinkedList.push(3));

console.log("----------------");
console.log("Insert number in the linked list: ");
console.log(myLinkedList.insert(1, 2));

console.log("----------------");
console.log("Linked List after insert new node: ");
console.log(myLinkedList);
