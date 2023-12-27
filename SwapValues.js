/*Instructions:
I would like to be able to pass an array with 
two elements to my swapValues function to swap the values.
However it appears that the values aren't changing.

Can you figure out what's wrong here?


*/

//My Answer
function swapValues(arr) {
  var temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  return arr;
}

//best practice
function swapValues() {
  return arguments[0].reverse();
}
