/* Task:
- write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
- the string should start with a 1.
- a string with size 6 should return :'101010'.
- with size 4 should return : '1010'.
- with size 12 should return : '101010101010'.
- The size will always be positive and will only use whole numbers.

 */

//Parameters =-  num positive number
//R - 1| 0, always be positive and only use whole numbers in strings though
//E size 4 should return : '1010'. with size 12 should return : '101010101010'.
//P .replace()

function stringy(val) {
  val.replace(1, "1");
  val.replace(2, "10");
}

console.log(stringy(4)); // 1010
console.log(stringy(6)); // 101010
