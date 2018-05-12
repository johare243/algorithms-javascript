// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);

}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// function anagrams(stringA, stringB) {
//   const aMap = mapArr(stringA);
//   const bMap = mapArr(stringB);

//   if (Object.keys(aMap).length !== Object.keys(bMap).length) {
//     return false;
//   }

//   for (let char in aMap) {
//     if (aMap[char] !== bMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function mapArr(str) {
//   const charMap = {};
//   for (let elem of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[elem] = charMap[elem] + 1 || 1;
//   }
//   return charMap;
// }

module.exports = anagrams;
