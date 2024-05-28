/*
Task:
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"

*/

//P - two arguments - both strings
//R shorter string at begnning and end
//E

console.log(solution("1", "22")); // "1221"
console.log(solution("22", "1")); // "1221"

//P
// Check which string is shorter.
// Concatenate the strings in the order short + long + short.

function solution(a, b) {
  let short;
  let long;

  if (a < b) {
    a += short;
    b += long;
  } else if (b < a) {
    b += short;
    a += long;
  }

  return short + long + short;
}
