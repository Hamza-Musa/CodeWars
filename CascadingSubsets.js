/* Task:
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.




*/

function eachCons(array, n) {
  //initlize empty arr to store reulsting sublists
  let result = [];

  //loop through array, but stop when there aren't enough elementes left to make a full sublist of size n
  for (let i = 0; i <= array.length - n; i++) {
    // USe slice to extrac a sublist of size n starting from index i
    let subArray = array.slice(i, i + n);

    // Push the sublist into the result array
    result.push(subArray);
  }

  //Return the array of sublists
  return result;
}

//Example usage
console.log(eachCons([1, 2, 3, 4], 2)); //[[1,2], [2,3], [3, 4]]
console.log(eachCons([1, 2, 3, 4], 2)); //[[1,2,3], [2,3,4]]
