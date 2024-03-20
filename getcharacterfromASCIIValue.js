/* Instructions:

Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

65 --> 'A'
97 --> 'a'
48 --> '0
For ASCII table, you can refer to http://www.asciitable.com/

*/

//P - number
//R - js method String.fromCharCode to convert number to char
//E
// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0
//P
//parameter from function takes number

//Answer
//parameter from function takes number

function asciiToChar(number) {
  // js method - String.fromCharCode() This method is used to create a string from the given sequence of Unicode values (in this case, ASCII values).

  return String.fromCharCode(number);
}
