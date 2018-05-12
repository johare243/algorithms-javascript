// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   if (str === str.split('').reverse().join('')) {
//     return true;
//   } else {
//     return false;
//   }
// }

//using Array.prototype.every() helper function
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}


////using traditional for loop
//function palindrome(str) {
//  var pal = '';
//  for (let i = str.length - 1; i >= 0; i--) {
//    pal += str[i];
//  }
//  // unnecessary as === returns boolean true or false
//  // if (str === pal) {
//  //   return true;
//  // } else {
//  //   return false;
//  // }
//  return str === pal;
//}

////using new for of loop
//function palindrome(str) {
//  var pal = '';
//  for (let char of str) {
//    pal = char + pal;
//  }
//  if (str === pal) {
//    return true;
//  } else {
//    return false;
//  }
//}

module.exports = palindrome;
