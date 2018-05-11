//Function to sum all numbers up to n divisible by 3 or 5 
function mult3and5(n) {
  var sum = 0;
  for (var i=3; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  } 
  return sum;
}
