/* Instructions:
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

 */

// Answer
function nameShuffler(fullName) {
  // Split the full name into an array of words
  const names = fullName.split(" ");

  // Swap the first and last elements
  const firstName = names[0];
  const lastName = names[names.length - 1];
  names[0] = lastName;
  names[names.length - 1] = firstName;

  // Join the array back into a string
  return names.join(" ");
}

// Example usage:
console.log(nameShuffler("john McClane")); // Output: "McClane john"
