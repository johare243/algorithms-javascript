// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

//algocasts version
class Queue {
  constructor() {
    this.data = [];
  }

  add(content) {
    return this.data.unshift(content);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

//my version from Data Structures & Algorithms
// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;

    // let Node = function(_c) {
    //   this.c = _c;
    //   this.next = null;
    //   this.prev = null;
    //   return this;
    // };

    // this.add = function(_c) {
    //   let node = new Node(_c); node.c = _c;
    //   if (this.head === null) {
    //     this.head = node;
    //     this.tail = this.head;
    //     return node.c;
    //   }
    //   node.prev = this.tail;
    //   this.tail.next = node;
    //   this.tail = node;
    //   return node.c;
    // };

    //this.remove = function() {
    //  let removedNode = this.head;
    //  if (this.head === null) {
    //    return;
    //  }
    //  this.head = this.head.next;
    //  //this.head.prev = null;
    //  return removedNode.c;
    //};
  //}
//}

module.exports = Queue;
