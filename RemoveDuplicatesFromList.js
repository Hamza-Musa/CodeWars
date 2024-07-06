/* Instructions:
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]


*/

//P arr, non negative numbers +,
//R return arr without duplicates
//E
//P

//Answer
function distinct(a) {
  //js method to get rid of duplicate - Sets allows you to create collections of unique values.
  return [...new Sort(a)];
}

console.log(distinct([1])); // [1]
console.log(distinct([1, 2])); //[1,2];
console.log(distinct([1, 1, 2])); //[1,2]
