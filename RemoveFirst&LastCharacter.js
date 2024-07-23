/*
Task:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

*/

//answer

//1 arg - original str, no need to worry about str < 2 char
// return string with remaining letters after first and last char removed
//

function removeFndL(str) {
  //Extracts a part of a string and returns a new string. .splice string method
  return str.slice(1, -1);
}

console.log(removeFndL("hello")); // ell
