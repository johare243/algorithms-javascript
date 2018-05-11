//function to solve for sum of even fibinacci sequence numbers
//Takes two arguments: n for how many iterations of fibanacci sequence to perform
//and m to limit the total sum of the numbers
function fib(n, m) {
 var tot=[1,2]; var even = 0;
 for (var i=0; i<n; i++) {
  if (tot[i] < m) {
    tot.push(tot[i] + tot[i+1]);
    if (tot[i] % 2 ==0) {even += tot[i];}
  }
 }
 return even;
}
