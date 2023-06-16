/*

6 kyu 

Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {
    let result = "";
    for (let letter of string) { // loop letters
      
    // if letter is uppercase and not the 1st letter of string = add a space followed by letter
    if (letter == letter.toUpperCase() && result) {
      result += ` ${letter}`;
    } else { 
      result += letter; // just adds the letter
    }};
    return result;
};