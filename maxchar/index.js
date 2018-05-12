// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var max = 0;      //number of times maxChar appears
  var maxChar = ''; //holds the current char with the highest count
  var charMap = {}; //declare object that holds chars and their count

  for (let char of str) {   // for each char in str add one to count, or initialize count to 1 (bc null+1=null)
    charMap[char] = charMap[char] + 1 || 1; //charMap (a dictionary), at location [char] add 1 or init to 1  

    //above statement replaces the below
    //the OR stm || is needed because undefined + 1 is null
    // if (!chars[char]) {
    //   chars[char] = 1;
    // } else {
    //   chars[char]++;
  //   }

  }

  for (let char in charMap) {   //for each char ||IN|| (not of) charMap(a dictionary) 
    if (charMap[char] > max) {  //if count of current char is gt max value
      max = charMap[char];      //set the new max to the current char
      maxChar = char;           //update the maxChar to the new maxChar
    }
  }
  return maxChar;
}

module.exports = maxChar;
