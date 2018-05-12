// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Math.sign() returns the sign of a number

function reverseInt(n) {
  const rev = n.toString().split('').reverse().join('');
  return parseInt(rev) * Math.sign(n);
}
// function reverseInt(n) {
//   var sign = Math.sign(n); //returns 1 or -1
//   n *= sign; //turns n positive to work around negative - sign
//   var rev = n.toString().split('').reverse(); //n => string => array => reverse array
//   let i = 0; //counter
//   if (n == 0) {return 0;}  
//   while (rev[i] === '0') { 
//     rev.shift(); //removes zeros in front of reversed n array
//     i++;
//   } 
//   return parseInt(rev.join('')) * sign; //n as arr => string => integer * sign to revert 
// }

module.exports = reverseInt;
