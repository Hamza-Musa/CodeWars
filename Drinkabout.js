/* 
Instructions:
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"


*/

//Answer

//P number -age
//R - conditional - string
//E '13 - drink coke'
//P

function peopleWithAgeDrink(old) {
  // kids drink toddy
  if (old < 14) {
    return "drink toddy";
    //teens drink coke
  } else if (old < 18) {
    return "drink coke";
    //young adults drink beer
  } else if (old < 21) {
    return "drink beer";
    //adults drink whisky
  } else {
    return "drink whisky";
  }
}
