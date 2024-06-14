/*
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.


*/

//Parameters- single parameter - string
//R return if alligator -> small else return wide
//E
//P

function mouthSize(animal) {
  // make it case-sensitive
  const realAnimal = animal.toLowerCase();
  //if alligator return "small"
  if (realAnimal === "alligator") {
    return "small";
    //else -other animals -> return "wide"
  } else {
    return "wide";
  }
}

//Examples
console.log(mouthSize("alligator")); //"small"
console.log(mouthSize("cat")); //"wide"
console.log(mouthSize("dog")); //"wide"

/* Better Practice
function mouthSize(animal){
return animal.toLowerCase() == 'alligator' ? 'small' : wide':
}
*/
