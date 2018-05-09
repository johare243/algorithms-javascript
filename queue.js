//Queue (First In First Out) data stucture
//Documentation for Stacks and Queues available in other modules
var Node = function(_content) {
  this.content = _content;
  this.prev = null;
  this.next = null;
  return this;
};

var Queue = function(_content) {
  this.head = null;
  this.tail = null;
  this.length = 0;
  return this;
};

// Add a node to the List function
Queue.prototype.enqueue = function(_content) {
  var node = new Node(_content);
  node.content = _content;

  //queue is empty
  if (this.head == null) {
    this.head = node;
    this.tail = node;
    this.length++;
    return node;
  }

  //otherwise (at least one node in queue)
  node.prev = this.tail;
  this.tail.next = node;
  this.tail = node;
  this.length++;
  return node;
};

Queue.prototype.dequeue = function() {
  var removedNode = this.head;

  //empty queue
  if (this.head == null) {
    console.log('Queue is empty, cannot use dequeue()');
    return null;
  }

  //one node in queue
  if (this.head == this.tail) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return removedNode;
  }

  //more than one node in queue
  this.head = this.head.next;
  this.head.prev = null;
  this.length--;
  return removedNode;
};

//print Queue as a string
Queue.prototype.print = function() {
  var str = '';
  var currentNode = this.head;

  while (currentNode != null) {
    str += node.content + ' ';    //node plus a space to separate nodes
    currentNode = currentNode.next;
  }
  return str;
};
