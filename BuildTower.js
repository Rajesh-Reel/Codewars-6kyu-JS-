/*

6 kyu 

Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors) {
    let empty, asterisk, tower = [];
    for (let i = 1; i <= nFloors; i++) {
      empty = " ".repeat(nFloors - i);
      asterisk = "*".repeat((2 * i) - 1);
      tower.push(`${empty}${asterisk}${empty}`);
    }
    return tower;
}