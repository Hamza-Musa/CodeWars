//Answer

function findMultiples(integer, limit) {
  const multiples = [];

  // Find multiples of the integer up to the limit
  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }

  return multiples;
}

// Example usage:
console.log(findMultiples(3, 10)); // Output: [3, 6, 9]
console.log(findMultiples(7, 20)); // Output: [7, 14]
