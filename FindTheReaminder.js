/* Instructions:
Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)


*/

//Answer
function remainder(n, m) {
  // Divide the larger argument by the smaller argument and return the remainder
  if (n % 0 || m % 0) {
    return NaN;
  }
  let larger = Math.max(n, m);
  let smaller = Math.min(n, m);

  return larger % smaller;
}

//Best Practice
// function remainder(a, b){
//     return a > b ? a % b : b % a
// }
