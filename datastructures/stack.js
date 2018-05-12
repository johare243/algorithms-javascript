//Implementation of a Stack (Last In First Out) Data Structure

var Node = function(_content) {
  this.content = _content;
  this.next = null;
  this.prev = null;
  return this;
};

var Stack = function(_content) {
  this.bottom = null;    //first node (this.head)
  this.top = null;    //last node (this.tail)
  this.length = null;
  return this;
};

//places node at top/front of stack
Stack.prototype.push = function(_content) {
  var node = new Node(_content);
  node.content = _content;

  //stack is empty
  if (this.bottom == null) {
    this.bottom = node;
    this.top = this.bottom;
    this.length++;
    return node;
  }

  //stack has at least one node
  node.prev = this.top;
  this.top.next = node;
  this.top = node;
  return node;
};

//removes node from top/front of stack
Stack.prototype.pop = function() {
  var poppedNode = this.top;

  //stack is empty
  if (this.bottom == null) {
    console.log('Stack is empty, cannot use pop()');
    return null;
  }
  
  //one node in stack
  if (this.bottom == this.top) {
    this.bottom = null;
    this.top = null;
    this.length--;
    return poppedNode;
  }

  //more than one node in stack
  this.top = this.top.last;
  this.top.next = null;
  this.length--;
  return poppedNode;
};

//print stack as a string
Stack.prototype.print = function() {
  var str = '';
  var currentNode = this.top;

  while (currentNode != null) {
    str += node.content + ' ';    //add node content plus space to separate nodes
    currentNode = currentNode.prev;
  }
  return str;
};
