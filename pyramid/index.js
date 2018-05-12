// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// recursive soln
function pyramid(n, row = 0, level = '') {
  const midpoint = Math.floor((2 * n -1) / 2);

  //base case
  if (n === row) {
    return;
  }

  if (level.length === 2 * n -1) {
    console.log(level);
    return pyramid(n, row+1);
  }

  const add = midpoint - row <= level.length && midpoint + row >= level.length ? '#' : ' ';
  pyramid(n, row, level + add);

}

// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     var level = ''; 
//     const midpoint = Math.floor((2*n -1) / 2);
//     for (let col = 0; col < 2*n -1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

module.exports = pyramid;
