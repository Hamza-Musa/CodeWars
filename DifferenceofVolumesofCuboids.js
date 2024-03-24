/* Instructions:
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.



*/

//Answer
//Para: 2 arrays of +integers for each letters
//R: the difference between the two array volumes
//Ex: ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
//Ps: Define function that takes two lists of integers, a and b, as input.
//Calculate the volume of cuboid a and then volume of b then using
//minus to find the difference, return that differnece. Make it positive

function findDifference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
