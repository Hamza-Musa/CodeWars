/*
Task:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!



*/

//Answer
function duplicateEncode(word) {
  // Normalize the string to lowercase
  const lowerCaseWord = word.toLowerCase();

  // Create an object to count occurrences of each character
  const charCount = {};

  // Count each character's occurrences
  lowerCaseWord.split("").forEach((char) => {
    charCount[char] = (charCount[char] || 0) + 1;
  });

  // Map each character to ')' if it appears more than once, or '(' if it appears only once
  const result = lowerCaseWord.split("").map((char) => {
    return charCount[char] > 1 ? ")" : "(";
  });

  // Join the resulting array into a string and return
  return result.join("");
}

// Tests
console.log(duplicateEncode("din")); // Output: "((("
console.log(duplicateEncode("recede")); // Output: "()()()"
console.log(duplicateEncode("Success")); // Output: ")())())"
