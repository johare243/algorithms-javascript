// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //creat empty arr of arr called result
  const result = [];
  for (let index = 0; index < n; index++) {
    result.push([]);
  } 

  //create counter variable starting at 1
  let counter = 1;
  let start_col = 0;
  let end_col = n-1;
  let start_row = 0;
  let end_row = n-1;
  
  //as long as (start col <= end col) && (start row <= end row)
  while (start_col <= end_col && start_row <= end_row) {
    
    //loop from start col to end col
    //top row (and last added element in the center)
    for (let i = start_col; i <= end_col; i++){
      //at result[start_row[i]] assign counter variable
      result[start_row][i] = counter;
      //increment counter
      counter++;
    }
    //increment start row
    start_row++;
    
    //loop from start row to end row
    //right column
    for (let i = start_row; i <= end_row; i++) {
      //at result[i][end_col] assign counter variable
      result[i][end_col] = counter;
      //increment counter
      counter++;
    }
    //decrement end row
    end_col--;

    //loop from end col to start col
    //bottom row
    for (let i = end_col; i >= start_col; i--) {
      result[end_row][i] = counter;
      counter++;
    }
    end_row--;

    //loop from end row to start row
    //start column
    for (let i = end_row; i >= start_row; i--) {
      result[i][start_col] = counter;
      counter++;
    }
    start_col++;
  }
  return result;
}

module.exports = matrix;
