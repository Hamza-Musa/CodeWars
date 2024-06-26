/*Task:
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.



*/

//P - two num -> positiv, no special characters, no strings
//R -> health- damage, but a;sp health cant be less than 0
//E
//P


//Answer

function combat(health, damage) {
  if(health - damage < 0) {
    return 0
} else{
    return health-damage;    
  }
}

console.log(combat(40, 20)) //20
console.log(combat(40, 50)) //0
