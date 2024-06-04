/* 
Task:
DESCRIPTION:
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

The string will always start with a letter and will never be empty.

Examples:

"hello" --> "Hello"
"Hello" --> "Hello" (the first letter was already capitalized)
"a"     --> "A"


*/

//P - single parameter - string
//R - return a string where first character is capitalized and the rest of the string remains unchanged
//E
//P

//ANSWER
function capitalize(word) {
  //Get the first character of the string. Convert the first character to uppercase
  let firstChar = word.charAt(0).toUpperCase();
  // Get the rest of the string starting from the second character
  //Concatenate the uppercase first character with the rest of the string
  //Return the result
}

console.log(capitalize("hello")); //Hello
console.log(capitalize("Hello")); //Hello
console.log(capitalize("a")); //A
