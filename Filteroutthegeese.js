/* Instructions:
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

*/

//Answer
//P(arameters) array of strings
//R(eturn) return array that does include any of geeses from geese array
//E(xample) For example, if this array were passed as an argument:
//["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// function should return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

//P(seudo)

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  // return an array containing all of the strings in the input array except those that match strings in geese
  return birds.filter((bird) => !geese.includes(bird));
}
