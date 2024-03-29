/* Instructions
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

*/

//P Num, Two , integer and limit
//R return multiples upto the limit
//E (2, 6), the function should return [2, 4, 6] a
//Psuedo:

// 1. Create an empty array named multiples.
// 2. Iterate from integer up to limit.
// 3. If the current number (i) is a multiple of integer, add it to the multiples array.
// 4. Return the multiples array containing all multiples of integer up to limit.

//Answer

function findMultiples(integer, limit) {
  const multiples = [];

  // Find multiples of the integer up to the limit
  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }

  return multiples;
}

// Example usage:
console.log(findMultiples(3, 10)); // Output: [3, 6, 9]
console.log(findMultiples(7, 20)); // Output: [7, 14]
