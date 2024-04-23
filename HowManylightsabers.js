/*
Task:
Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18


*/

//Answer
// (p)string
//(r) num of lightsabers
// (e) 'Zach' -> 18 : 0
// if Zach return 18 everybody else has 0

function howManyLightsabersDoYouOwn(name) {
  if (name === "Zach") {
    return 18;
  } else {
    return 0;
  }
}

//Better practice - ternary operator
return name === "Zach" ? 18 : 0;
