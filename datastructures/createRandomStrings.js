//Create a list of random strings

function createRandStrings(list) {
  //...substr(2,lengthOfStrings)
  //...toString(A-Z0-9)
  for (var i = 0; i < 20; i++) {
    var str = Math.random().toString(36).substr(2,5);
    list.push(d);
  }
}
