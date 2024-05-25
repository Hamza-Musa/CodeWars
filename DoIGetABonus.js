/*Task
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

*/

//P - two parameters - one a integer, another a boolean
//R if true times salary by 10 if not return regular salary
//E
//P
//if loop
//   return "\u00A3" + Stringifying the salary

function bonusTime(salary, bonus) {
  if (bonus === true) {
    salary *= 10;
  } else {
    salary;
  }
  return "\u00A3" + String(salary);
}

console.log(bonusTime(100, true)); // return '£1000'
console.log(bonusTime(100, false)); // return '£100'
