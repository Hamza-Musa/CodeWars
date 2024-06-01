/* Task:
#1: Remove an exclamation mark from the end of string
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"


*/

//Parameters -> string
//Return -> return string without exclamation mark at the end of the string
//Example
//Pseudocode

function remove(string) {
  // Check if the last character is '!'
  if (string.slice(-1) === "!") {
    // Remove the last chracter('!')
    return string.slice(0, -1);
  } else {
    //Return the otriginal stirng if no '!' at the end
    return string;
  }
}

//test cases
console.log(remove("Hi!")); // "Hi"
console.log(remove("Hi!!!")); // "Hi!!"
console.log(remove("!Hi")); // "!Hi"
console.log(remove("Hi! Hi!")); // "Hi! Hi"
console.log(remove("Hi")); // "Hi"
