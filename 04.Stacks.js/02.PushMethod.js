class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
}

console.log("---------------------------");
console.log("Criando nossa primeira Stack");

let myStack = new Stack(4);
console.log(myStack);

console.log("---------------------------");
console.log("Inserindo um número através do push method usando linked list");
let myPushedStack = myStack.push(3);
console.log(myPushedStack);
