/* Task:
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

*/

//answer

// word -> 'str', no num, no !
// return a string. depending(conditinal) on users input -return a
//certain string,also note that default case is beer, also cover cases where theres incorrect captialization
// "Jabroni"	 => "Patron Tequila"
// "School Counselor" ->	"Anything with Alcohol"
// "Programmer" ->	"Hipster Craft Beer"

// function getDrinkByProfession(param){
//   let profession = param.toLowerCase()

//   let equalizer;

//   switch (profession) {
//     case "jabroni":
//      let equalizer ="Patron Tequila"
//     break;
//     case "school counselor":
//       let equalizer = "Anything with Alcohol"
//     break;
//     case "programmer":
//       let equalizer = "Anything with Alcohol"
//     break;

//     case "bike gang member":
//       let equalizer = "Anything with Alcohol"
//     break;

//     case "politician":
//       let equalizer = "Your tax dollars"
//     break;

//       case "rapper":
//       let equalizer = "Cristal"
//     break;
//     default:
//     let equalizer = "Beer"
//     break;
//     }
//   return equalizer
// }
function getDrinkByProfession(param) {
  let profession = param.toLowerCase(); // Convert input to lowercase for case insensitivity

  switch (profession) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer"; // Default case for any other input
  }
}

// Test cases:
console.log(getDrinkByProfession("Jabroni")); // "Patron Tequila"
console.log(getDrinkByProfession("School Counselor")); // "Anything with Alcohol"
console.log(getDrinkByProfession("Programmer")); // "Hipster Craft Beer"
console.log(getDrinkByProfession("Bike Gang Member")); // "Moonshine"
console.log(getDrinkByProfession("Politician")); // "Your tax dollars"
console.log(getDrinkByProfession("Rapper")); // "Cristal"
console.log(getDrinkByProfession("pOLitiCIaN")); // "Your tax dollars" (handles case insensitivity)
console.log(getDrinkByProfession("Teacher")); // "Beer" (default case)
