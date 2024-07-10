/*
Task:
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."


*/

//P - two parameters, each p - two arg, first is teams - str, 2nd is score - num
//R return string specifying which team won or if draw
//E
//P
//conditional statmens - if

function uefaEuro(teams, scores) {
  if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  } else if (scores[1] > scores[0]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  } else {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  }
}

//test
console.log(uefaEuro(["England", "Spain"], [2, 1])); // "At match England - Spain, England won!")
console.log(uefaEuro(["France", "Spain"], [1, 2])); // "At match France - Spain, Spain won!")
console.log(uefaEuro(["England", "Denmark"], [0, 0])); // "At match England - Switzerland, teams played draw.")
