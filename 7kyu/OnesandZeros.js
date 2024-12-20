/* 
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.



*/



//power of 2n -> [0,0,0,1] -> 1 -> 2*0
// [0, 0, 1, 0] ==> 2*1 -> 2 
// [0, 1, 0, 0] ==> 2*2 -> 4
// [1, 0, 0, 0] ==> 2*3 -> 8

// [0, 1, 0, 1] ==> 5
// [1, 0, 0, 1] ==> 9

//Answer
const binaryArrayToNumber = arr => {
    return arr.reduce((accumulator, currentValue) => {
  return accumulator * 2 + currentValue;
    });
  }