/* Instructions
Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.


*/

//My answer
// Parameters: Input number to be checked for being a Wilson prime.

// Returns: Boolean value indicating whether the input number is a Wilson prime.

// Examples:
// For input number 5, the function should return true because ((5-1)! + 1) / (5 * 5) equals 1, satisfying the condition for Wilson primes.

// Pseudo Code:
// Define a function isWilsonPrime that checks if the input number is prime and if the expression ((number - 1)! + 1) / (number * number) results in a whole number.

const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

const amIWilson = (p) => (factorial(p - 1) + 1) % (p * p) === 0;

//Best practices
// const amIWilson = (p) => [5, 13, 563].indexOf(p) > -1;
