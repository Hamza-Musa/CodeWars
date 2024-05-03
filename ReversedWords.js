/* 
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
 

*/

//P - string of words
//R reverse the string
//E
//P - split turns "hello world" into ["hello", "world"] reverse reverses. joins get rid of array ans into sing string

function reversedWords(str) {
  return str.split(" ").reverse("").join(" ");
}

console.log(reversedWords("hello world!"));
console.log(reversedWords("yoda doesn't speak like this"));
