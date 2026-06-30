class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    while (true) {
      if (value === temp.value) {
        return undefined;
      }

      if (value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  findMin() {
    if (!this.node) {
      return undefined;
    }
    let temp = this.root;
    while (temp.left !== null) {
      temp = temp.left;
    }
    return temp.value;
  }

  findMax() {
    if (!this.node) {
      return undefined;
    }

    let temp = this.root;
    while (temp.right !== null) {
      temp = temp.right;
    }
    return temp.value;
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(7);
bst.insert(11);
bst.insert(12);
bst.insert(3);

console.log(bst);
