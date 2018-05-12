// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//using arr reduce() function
////function reverse(str) {
 //return str.split('').reduce((rev, char) => char + rev, ''); 
 //// return str.split('').reduce((reversed, char) => {
 //   return char + reversed;
 // }, ''); 
//}

//must call function for debugger statement
// reverse('asdf');
//traditional for loop
//function reverse(str) {
 // var result = '';
 //var len = str.length;
 // for (var i = len-1; i >= 0; i--) {
 //   result += str[i];
 // }
 // return result;
//}

//using new ES for of loop
function reverse(str) {
  var result = '';
  for (let char of str) {
    result = char + result;
  }
  return result;
}

//using built-in array function
//function reverse(str) {
// return str.split('').reverse().join('');
//}
module.exports = reverse;
