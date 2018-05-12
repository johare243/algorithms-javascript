//Merge Sort Algorithm
//Use with List data structure

function mergeSort(list) {
  var len = list.length;
  if (list.length <-1) {
    return list;
  }

  var left = new List();
  var right = new List();

  for (var i = 0; i < len; i++) {
    if (i < len/2) {
      left.push(list.dequeue().content);
    } else {
      right.appendToFront(list.pop().content);
    }
  }

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}


function merge(left, right) {
  var result = new List();

  while (left.length > 0 && right.length > 0) {
    if (left.head.content <= right.head.content) {
      result.push(left.dequeue().content);
    } else {
      result.push(right.dequeue().content);
    }
  }

  while (left.length > 0) {
    result.push(left.dequeue().content);
  }

  while (right.length > 0) {
    result.push(right.dequeue().content);
  }

  return result;
}
