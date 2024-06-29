/*
Task:
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
Happy coding!

*/

//P- 2 arguments, arrays, numbers
//R - return them into a single array, sorted in asc order.
//E
//P

function mergeArrays(arr1, arr2) {
  // Merge the arrays first
  let mergedArr = arr1.concat(arr2);

  // Sort the merged array
  mergedArr.sort((a, b) => a - b);

  // Remove duplicates
  let uniqueSortedArr = [...new Set(mergedArr)];

  return uniqueSortedArr;
}

// Example usage
let arr1 = [3, 1, 4, 1];
let arr2 = [5, 2, 6, 3];
console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]

//examples
console.log(mergeArrays([(1, 2, 3, 4, 5)], [6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
