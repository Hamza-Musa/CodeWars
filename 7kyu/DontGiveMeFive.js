/*Task:
Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!



*/

//answer

//p - start number, end number
//r, return count num between start number and end number with exclusion of numebrs with a 5 in it
//p


function dontGiveMeFive(start, end){
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
    .filter(num => !num.toString().includes('5')).length;
}

function dontGiveMeFive(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
      .filter(num => !num.toString().includes('5')).length;  // Return the count
  }
  
  console.log(dontGiveMeFive(1, 9)); // Output: 8
  