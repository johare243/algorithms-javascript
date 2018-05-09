//Doubly-Linked List with push/enqueue, pop, dequeue, append to front, and print functionality
//Documentation for Stacks and Queues available in other modules
var Node = function(_content) {
  this.content = _content;
  this.prev = null;
  this.next = null;
  return this;
};

var DL_List = function(_content) {
  this.head = null;
  this.tail = null;
  this.length = 0;
  return this;
};

// Add a node to the List function
DL_List.prototype.push = function(_content) {
  var node = new Node(_content);
  node.content = _content;

  //if list is empty
  if (this.head == null) {
    this.head = node;
    this.tail = node;
    this.length++;
    return node;
  }
  
  //otherwise (more than zero nodes in list)
  node.prev = this.tail;
  this.tail.next = node;
  this.tail = node;
  this.length++;
  return node;
};

DL_List.prototype.pop = function() {
  var poppedNode = this.tail;

  //empty list
  if (this.head == null) {
    console.log('List is empty, cannot use pop()');
    return null;
  }
  //one node in list
  if (this.tail == this.head) {
    this.tail = null;
    this.head = null;
    this.length--;
    return poppedNode;
  }

  this.tail = this.tail.prev;
  this.tail.next = null;
  this.length--;
  return poppedNode;
};

DL_List.prototype.dequeue = function() {
  var dequeuedNode = this.head;

  //empty queue
  if (this.head == null) {
    console.log('List is empty, cannot use dequeue()');
    return null;
  }

  //one node in queue
  if (this.head == this.tail) {
    this.head == null;
    this.tail == null;
    this.length--;
    return dequeuedNode;
  }

  this.head = this.head.next;
  this.head.prev = null;
  this.length--;
  return dequeuedNode;
};

DL_List.prototype.appendToFront = function() {
  var node = new Node(_content);
  node.content = _content;

  //empty list
  if (this.head == null) {
    this.head = node;
    this.tail = this.head;
    this.length++;
    return node;
  }

  //one or more nodes in list
  node.next = this.head;
  this.head.prev = node;
  this.head = node;
  this.length++;
  return node;
};

DL_List.prototype.print = function() {
  var str = '';
  var currentNode = this.head;

  while (currentNode != null) {
    str += node.content + ' ';    //node plus a space to separate nodes
    currentNode = currentNode.next;
  }
  return str;
};
