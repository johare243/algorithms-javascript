// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];       //create new array to hold chunks of original array
  let i = 0;                //index counter
  while (i < array.length) {  // while index is less than array.length
    chunked.push(array.slice(i, i+size)); //push a slice of length 'size' into chunked array
    i = i + size;            //increment index by size
  }
  return chunked;
}

////STUDY THIS 
//function chunk(array, size) {
//  const chunked = [];
//  for (let element of array) {
//    const last = chunked[chunked.length-1];  //set last to the last element in chunked
//    if (!last || last.length === size) { //if there is no [] as the last element or that [] is full
//      chunked.push([element]);          //push a new array with the first element to chunked array
//    } else {
//      last.push(element);               //otherwise, add current element to last [] in chunked []
//    }
//  }
//  return chunked;
//}

module.exports = chunk;
