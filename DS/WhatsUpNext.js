/*
Task:
Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"


*/

//Answer

//Data Structures

//P - sequence of items (which can be a list, string, etc.)
// -A specific item within that sequence.
//R - the item immediately following the first occurrence of the specified item.
// else null

// function nextItem(xs, item) {
//   // loop through arr, find the first occurrence of the specified item.
//   for(let i=0; xs.includes(item); i++){

//   }
// }

function nextItem(xs, item) {
  // Check if xs is an array or a string
  if (Array.isArray(xs) || typeof xs === "string") {
    const index = xs.indexOf(item);
    if (index !== -1 && index < xs.length - 1) {
      return xs[index + 1];
    }
  } else {
    console.error("Invalid input: xs must be an array or a string.");
  }
  return undefined;
}

//E

console.log(nextItem("hello", "h")); // return 'e'
console.log(nextItem([1, 2, 3, 4, 5, 6, 7], 3)); // 4
console.log(nextItem("testing", "t")); // "e"

console.log(nextItem("hello", "O")); // return null
console.log(nextItem("hello", "0")); // return null
