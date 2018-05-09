//Quick Sort Sorting algorithm
//Use with List data structure

function quickSort(list, start, end) {
  var pivot = partition(list, start, end);

  if (start != pivot) {
    quickSort(list, start, pivot.prev);
  }

  if (pivot != end) {
    quickSort(list, pivot.next, end);
  }
}

function partition(list, start, end) {
  if (start.content == end.content) {
    return start;
  }

  var temp = null;
  var small = start;
  var pivot = end;
  var current = start;

  while (current != null && current != end) {
    if (current.content < pivot.content) {
      temp = small.content;
      small.content = current.content;
      current.content = temp;
      small = small.next;
    }
    current = current.next;
  }

  temp = pivot.content;
  pivot.content = small.content;
  small.content = temp;
  return small;
}
