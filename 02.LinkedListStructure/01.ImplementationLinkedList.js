class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let A = null; // head da linked list
let temp = new Node(2); // criando segundo node

A = temp;

temp = new Node(4);
let temp1 = A;

while (temp1.next !== null) {
  temp1 = temp1.next;
}

temp1.next = temp;

console.log(`Navegando pela lista encadeada: `);
let atual = A;

while (atual !== null) {
  console.log(atual.data);
  atual = atual.next;
}
