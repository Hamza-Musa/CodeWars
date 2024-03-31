/* Instructions:
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

*/

// Answer
//P - array + numbers
//R - return reversed array
//E [1,2,3] -> [3,2,1]
//P reversed order of list

function reverseList(list) {
  const reversed = list.reverse();
  return reversed;
}
