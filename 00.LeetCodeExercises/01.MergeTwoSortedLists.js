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

  mergeTwoSortedLists(list1, list2) {
    let dummy = new Node(0);
    let temp = dummy;

    while (list1 !== null && list2 !== null) {
      if (list1.value < list2.value) {
        temp.next = list1;
        list1 = list1.next;
      } else {
        temp.next = list2;
        list2 = list2.next;
      }
      temp = temp.next;
    }
    if (list1 !== null) {
      temp.next = list1;
    } else {
      temp.next = list2;
    }
    return dummy.next;
  }
}

let l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(4);
console.log("Lista 1: ");
console.log(l1);

// Criando a Lista 2: 1 -> 3 -> 4
let l2 = new Node(1);
l2.next = new Node(3);
l2.next.next = new Node(4);
console.log("Lista 2: ");
console.log(l2);

// Agora é só passar para o seu método
let linkedListManager = new LinkedList();
let mergedHead = linkedListManager.mergeTwoSortedLists(l1, l2);
console.log(mergedHead);
