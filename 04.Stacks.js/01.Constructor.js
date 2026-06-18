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
}

console.log("---------------------------");
console.log("Criando nossa primeira Stack");

let myStack = new Stack(4);
console.log(myStack);
