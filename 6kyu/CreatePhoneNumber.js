/*Task
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

*/

//Answer

//first three numbers in ()
// next three numbers
//-
//four numbers
//convert arr to string format

function createPhoneNumber(numbers) {
  let num = numbers.toString();
  let partOne = "(" + num[0] + num[2] + num[4] + ")";
  console.log(partOne);
  let partTwo = num[6] + num[8] + num[10];
  console.log(partTwo);
  let partThree = num[12] + num[14] + num[16] + num[18];
  console.log(partThree);
  return `${partOne} ${partTwo}-${partThree}`;
}
