//The Tower of Hanoi is a problem where we must transfer a number of disks, stacked on a source rod, to a destination rod, using a helper/auxillary rod
//A rule is that a larger disk may not be placed on top of a smaller disk
//This algorithm should be used with a Stack data structure

//n = number of disks
function towerOfHanoi(n, src, dest, aux) {
  //base case for n < 1 (n == 0)
  if (n >= 1) {
    towerOfHanoi(n-1, src, aux, dest);
    dest.push(src.pop().content);
    count++;
    towerOfHanoi(n-1, aux, dest, src);
  }
}
