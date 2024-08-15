/* 
Task:
Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];


*/

//Answer

//P arr = seq/array, second arg 'n', number of letters, or like the end point
//R if n == 0 return empty arr [] && what mentioned before
//E
//P

// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) // 'a'
// first(arr, 6) // returns everything in thea arr

function first(arr, n) {
  let result = [];
  if (n == null) {
    return [arr[0]];
  } else if (n > arr.length) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
  }
  return result;
}

console.log(first(["a", "b", "c", "d", "e"])); // ['a']
console.log(first(["a", "b", "c", "d", "e"], 1)); // ['a']
console.log(first(["a", "b", "c", "d", "e"], 4)); // ['a', 'b', 'c', 'd']
console.log(first(["a", "b", "c", "d", "e"], 0)); // []
