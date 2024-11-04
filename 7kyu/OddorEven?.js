/*
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!

*/

//answer:

//R sum of array is it even or odd - return string "even" or "odd"
//E - 
//P 
  //loop thru array sum all numbers in array 
    //use conditional if % 2==0 return "even" || "odd"

    function oddOrEven(array) {
        if (!Array.isArray(array)) {
        return "Input must be an array"; // Handle non-array input
      }
    
      const initialValue = 0;
      const sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
      );
      if(sum % 2 === 0){
        return "even";
      } else {
        return "odd";
      }
    }
    
    //E
    console.log(oddOrEven(0)) // "even"
    console.log(oddOrEven( [0, 1, 6])) // "odd"
    console.log(oddOrEven( [0, -1, -5])) // "even"


    // return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
        //better solution
