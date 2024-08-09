/*TasK
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!



*/

//Answer
function arrayMadness(a, b) {
  let sum = 0; // Initialize sum for squares
  let cubeSum = 0; // Initialize cubeSum for cubes

  // Calculate the sum of squares of elements in array `a`
  for (let i = 0; i < a.length; i++) {
    sum += a[i] ** 2;
  }

  // Calculate the sum of cubes of elements in array `b`
  for (let j = 0; j < b.length; j++) {
    cubeSum += b[j] ** 3;
  }

  // Compare the sums
  if (sum > cubeSum) {
    return true;
  } else {
    return false;
  }
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3])); // true
