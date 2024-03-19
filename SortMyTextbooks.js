/* 
Instructions:
HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive

*/

//Answer
function sorter(textbooks) {
  textbooks.sort((a, b) => {
    // Convert both strings to lowercase
    let textA = a.toLowerCase();
    let textB = b.toLowerCase();

    // Compare the strings
    if (textA < textB) return -1;
    if (textA > textB) return 1;
    return 0;
  });
  return textbooks; // Optional: Return the sorted array
}

// Example usage:
let textbooksArray = ["**english", "$istory", "Alg#bra", "Geom^try"];
sorter(textbooksArray);

console.log(textbooksArray);
