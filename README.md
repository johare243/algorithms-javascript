# JavaScript Data Structures and Algorithms
  Implementation of basic data structures and algorithms
  
  1. **[Gotchas In JavaScript](#Gotchas)**
  2. **[Array Helper Functions](#Arrays)**

## Gotchas
  Some important things to note when coding in JavaScript ES6

#### 'use strict'
  Adding 'use strict' to the beginning of a JS source file enforces stricter parsing and error handling at runtime.
  Some key benefits of enabling strict mode with 'use strict':
  - More silent errors now generate errors and throw exceptions
  - Ensures that global variables are not created when assigning a value to an undeclared variable
  - If 'this' is equal to null, an error is thrown
  - More benefits to come...

#### Unexpected NaN Qualities
  We know that NaN stands for 'Not a Number' and is the result of an equation such as 'Fred % 4' which obviously does not produce a number.  

  - The type of NaN is 'number'.  That is, console.log(typeof NaN === 'number');  //logs true.
  - NaN compared to anything is false, even itself.  That is, console.log(NaN === NaN); //logs false
  - Use new to ES6 Number.isNaN() function to test for NaN


#### Closures
  JavaScipt variables can belong to the local or global scope.  A closure is an inner function that has access to the variables in the outer (enclosing) function's scope chain. The closure has access to variables in three scopes: variable in its own scope, variables in the enclosing function's scope, and global variables  Global variables can be made local (private) with closures. 


## Arrays

| Function (Array.prototype.<function>)                   |    Description                           |
| -------------------------------------- |   ----------------------------------------------------------------- |
| slice(start, end)   | Returns portion of array from start to end, end not included |
| reduce(callback[, initialValue])   | Applies a function against an accumulator and each elem in arr to reduce to a single value |
| every(callback, [, thisArg])   | Tests whether all elems in the arr pass the test implemented by the provided function |
| reverse()   | Reverses an array in place (first elem becomes last, last becomes first, etc) |
