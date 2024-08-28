/*Task:
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)



*/
//Answer

//used unary plus to convert to number
getNumberFromString = (s) => +s.replace(/\D/g, "");
