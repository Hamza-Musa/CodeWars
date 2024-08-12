/* Task

Create a method all which takes two params:

a sequence
a function (function pointer in C)
and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.


*/

//answer
function all(arr, fun) {
  // Use the Array.every method to check if every element satisfies the condition
  return arr.every(fun);
}
