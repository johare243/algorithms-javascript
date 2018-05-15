// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.next = next;
    this.data = data;
    return this;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    return this;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    // if (this.head === null) {
    //   this.head = node;
    //   this.tail = this.head;
    //   this.length++;
    //   return node;
    // }
    // node.prev = this.head;
    // this.head.next = node;
    // this.head = node;
    // this.length++;
    // return node;
   } 

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }
    if(!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let node = this.head.next;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    let node = this.getLast();
    if (node) {
      node.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    let count = 0;
    while (node) {
      if (count === index) {
        return node;
      }
      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head || index >= this.size()) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    
    const prev = this.getAt(index - 1);
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      //node.next = this.head;
      //this.head = node;
      this.head = new Node(data, this.head);
      return;
    }
    // if (index >= this.size()) {
    //   let node = this.head;
    //   while (node) {
    //     if (!node.next) {
    //       node.next = new Node(data);
    //       return;
    //     }
    //     node = node.next;
    //   }
    // }
    const prev = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, prev.next);
    prev.next = node;
    return;
  }

  forEach(fn) {
    let node = this.head;
    let count = 0;
    while (node) {
      fn(node, count);
      node = node.next;
      count++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
