/*Instructions:
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/

//P - arr, num
//R average - add all numbers divide by amount
//E -
//P
function getAverage(marks) {
  //.reduce method The .reduce() method in JavaScript is a powerful array function that iterates through each element, accumulates their values, and computes the average by dividing the total sum by the number of elements
  let average =
    marks.reduce((sum, currentValue) => sum + currentValue, 0) / marks.length;
  //round down js method
  return Math.floor(average);
}

console.log(getAverage([2, 2, 2, 2])); // should equal 2
console.log(getAverage([1, 2, 3, 4, 5])); // should equal 3
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); // should equal 1
