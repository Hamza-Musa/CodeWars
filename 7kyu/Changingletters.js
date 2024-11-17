/* Task:
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

*/



function swap(string) {
    return string
      .split("") // Split the string into an array of characters
      .map((x) => (/[aeiou]/.test(x) ? x.toUpperCase() : x)) // Check if the character is a vowel and capitalize it
      .join(""); // Join the characters back into a string
  }
  
  // Example usage
  console.log(swap("Hello World!")); // Output: "HEllO WOrld!"
  
  
  //   return str.replace(/[aeiou]/g, (vowel) => vowel.toUpperCase());
  