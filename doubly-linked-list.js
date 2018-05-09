//Append-Only Doubly-Linked List with add and print functionality
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
DL_List.prototype.add = function(_content) {
  var node = new Node(_content);
  node.content = _content;

  //if list is empty
  if (this.head == null) {
    this.head = node;
    this.length++;
    return node;
  }

  //if only one node in list
  if (this.tail == null) {
    this.tail = node;
    this.tail.prev = this.head;
    this.head.next = this.tail;
    this.length++;
    return node;
  }
  
  //otherwise (more than one node in list)
  this.tail.next = node;
  node.prev = this.tail;
  this.tail = node;
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
