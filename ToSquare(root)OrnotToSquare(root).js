/* Instructions:
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.


*/

//P - array, positive numbers
//R return the sqr root if its an integer, otherwise return square of num
//E
//P
// Initialize Result List: Start with an empty list to store the results.
// Iterate Through Input Array: Loop through each element x in the input array.
// Calculate Square Root: Compute the square root of x and store it in a variable sqrt.
// Check if Perfect Square: Determine if sqrt is an integer.
// If Integer: Append sqrt to the result list.
// If Not Integer: Append x * x (the square of x) to the result list.
// Output Result: After processing all elements, print the result list.

//Answer

function squareOrSquareRoot(array) {}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); //[2,9,3,49,4,1]
