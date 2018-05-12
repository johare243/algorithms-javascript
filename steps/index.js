// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   var step = '';
//   for (let i = 1; i <= n; i++) {
//     step = '#'.repeat(i) + ' '.repeat(n-i);
//     console.log(step);
//   }
// }

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     var step = '';
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         step += '#';
//       } else {
//         step += ' ';
//       }
//     }
//     console.log(step);
//   }
// }

//recursive soln
function steps(n, row = 0, step = '') {
  //base case
  if (n == row) {
    return;
  }

  if (n === step.length) {
    console.log(step);
    return steps(n, row + 1);
  }

  const add = step.length <= row ? '#' : ' ';
  // above stm replaces this
  // if (step.length <= row) {
  //   step += '#';
  // } else {
  //   step += ' ';
  // }
  
  steps(n, row, step + add);
}
module.exports = steps;
