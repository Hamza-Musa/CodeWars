/* Instructions:
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3

*/

//P(parameters) - integer, repersenting the floor number in the American system
//R(return) - The corresponding floor nymber in the European system
//E(example) -
//  americanEuropean(1) should return 0
//  americanEuropean(0) should return 0
//  americanEuropean(5) should return 4
//  americanEuropean(15) should return 13
//  americanEuropean(-3) should return -3
//P(pseudocode)
//1. If the fllor is greater than or equal to 1:
//  a. If the floor is, return 0 (ground floor in European system)
//  b. If the floor is greater than or equal to 13, subtract 2 from the floor.
//  c. Otherwise, subtract 1 from the floor

//2. If the floor is negative return the floor unchanged (basements stay the same).
