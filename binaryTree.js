//Binary tree data structure

var TreeNode = function(_content) {
  this.parent = null;
  this.left = null;
  this.right = null;
  this.content = _content;
  return this;
};

var Node = function(_content) {
  this.content = _content;
  this.next = null;
  this.prev = null;
  return this;
};

TreeNode.prototype.addNode = function(_content) {
  var tnode = new TreeNode(_content);

  //if no left - add to left
  if (this.left == null) {
    tnode.parent = this;
    this.left = node;
    return this;
  }

  //if left & no right - add to right
  if (this.right == null) {
    node.parent = this;
    this.right = node;
    return this;
  }
  
  //keep binary tree balanced
  var leftChildren = this.left.numberOfChildren();
  var rightChildren = this.right.numberOfChildren();

  if (leftChildren < rightChildren) {
    this.left.addNode(_content);
  } else {
    this.right.addNode(_content);
  }

  return this;
};

TreeNode.prototype.numberOfChildren = function() {
  var n = 0;
  if (this.left != null) {
    n = 1 + this.left.numberOfChildren();
  }
  if (this.right != null) {
    n = n + 1 + this.right.numberOfChildren();
  }
  return n;
};

TreeNode.prototype.print = function() {
  var str = this.printNode();
  if (this.left != null) {
    str += this.left.print();
  }
  if (this.right != null) {
    str += this.right.print();
  }
  return str;
};

TreeNode.prototype.printNode = function() {
  var str = 'Node: ' + this.content;

  if (this.left != null) {
    str +=  'Left: ' + this.left.content;
  }

  if (this.right != null) {
    str = str + "Right: " + this.right.content;
  }

  return str;
};

var BinaryTree = function() {
  this.top = null;

  this.addNode = function(_content) {
    //if no top node - add to top
    if (this.top == null) {
      var node = new TreeNode(_content);
      this.top = node;
      return this;
    }

    //otherwise let node select
    this.top.addNode(_content);
    return this;
  };

  this.print = function() {
    if (this.top != null) {
      return this.top.print();
    }
  };
};
