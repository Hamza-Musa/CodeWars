/* 
Instructions:
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

*/

//Answer
//P string
//R turn string into num and the back into string

//E example: sumStr("4","5")

//P pseudo code: adding strings

function sumStr(a, b) {
  let total = Number(a) + Number(b);
  let newTotal = String(total);
  return newTotal;
}

//Better Practice
function sumStr(a, b) {
  return String(Number(a) + Number(b));
}
