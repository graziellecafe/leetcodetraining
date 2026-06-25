class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
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
        temp = temp.next;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

let binaryTreeSearch = new BinarySearchTree();
binaryTreeSearch.insert(15);
binaryTreeSearch.insert(20);
binaryTreeSearch.insert(18);
binaryTreeSearch.insert(7);
binaryTreeSearch.insert(22);

console.log(binaryTreeSearch);
console.log(binaryTreeSearch.contains(15));
console.log(binaryTreeSearch.contains(2));
