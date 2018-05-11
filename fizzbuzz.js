//For numbers up to n if number is divisible by 3 print fizz, divisible by 5 print buzz
//if divisible by both print fizzbuzz
//html below for testing

function fizzbuzz(n) {
	var n = document.getElementById('n').value;
  var result = ''; 
  for (var i = 0; i < n; i++) {
		if (i == 0) {
    	result += '0<br>';
      continue;
    }
    if (i % 3 == 0) {
      if (i % 5 == 0) {  // divisible by 3 and 5
        result += "fizzbuzz<br>";
        continue;
      } else {           // divisible by 3 only
        result += "fizz<br>";
        continue;
      } 
    } 

    if (i % 5 == 0 && i % 3 != 0) { //divisible by 5 only
    result += "buzz<br>";
    continue;
    } else {
      result += i + "<br>";
    } 
  }   
  document.getElementById('output').innerHTML = result;
}

//HTML for testing
//
//<input type='text' id='n'>
//<input type='button' id='submit' value='submit' onclick='fizzbuzz(n)'>
//<div id='output'>
//</div>
