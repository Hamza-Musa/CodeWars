/* Instructions:
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

The pipes are correct when each pipe after the first is 1 more than the previous one.

Task
Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

*/

//P array - numbers,
//R missing gaps in array full array
//E
//P
//.map()?
function pipeFix(numbers) {
  // Find the minimum and maximum values in the array
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  // Create a new array with incremented values
  const newList = Array.from(
    { length: max - min + 1 },
    (_, index) => min + index
  );

  return newList;
}
// Example usage
console.log(pipeFix([1, 2, 5])); // return [1,2,3,4,5]
const pipes = [1, 3, 5, 6, 7, 8];
const result = pipeFix(pipes);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
