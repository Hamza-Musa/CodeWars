/*
Task:
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).


*/

//Answer
function logicalCalc(booleans, operator) {
  // Initialize result with the first Boolean value
  let result = booleans[0];

  // Iterate through the remaining values and apply the operator
  for (let i = 1; i < booleans.length; i++) {
    const value = booleans[i];

    if (operator === "AND") {
      result = result && value;
    } else if (operator === "OR") {
      result = result || value;
    } else if (operator === "XOR") {
      result = result !== value; // XOR can be computed using !==
    } else {
      throw new Error("Invalid operator");
    }
  }

  return result;
}

// Examples
console.log(logicalCalc([true, true, false], "AND")); // Output: false
console.log(logicalCalc([true, true, false], "OR")); // Output: true
console.log(logicalCalc([true, true, false], "XOR")); // Output: false
