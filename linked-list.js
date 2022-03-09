class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    else if (this.length === 1) {
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    }
    else {
      let currentNode = this.head;
      const nodeToRemove = this.tail;
      let secondToLastNode;
      while (currentNode) {
        if (currentNode.next === this.tail) {
          secondToLastNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;
      return nodeToRemove;
    }
  }

  get(index) {
    // hmm, test this (2nd assertion)
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this.length -1) {
      return this.tail;
    }

    let currentNode = this.head;
    let iterator = 0;
    while (iterator < index) {
      iterator++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

const list = new LinkedList();
list.push("Chris");
list.push("Cooper");
list.push("Jasper");
console.log(list.length);
console.log(list.get("3"));