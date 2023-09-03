/*

6 kyu  

Write Number in Expanded Form 

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

*/

function expandedForm(num) {
    //   console.log("num:", num);
      let result = num.toString() //converts number to string
        .split("") //coverts string to an array
        .reverse() //reverses order
        .map( (a, i) => a * Math.pow(10, i)) //times number by 10 to power of it's index
        .filter(x => x > 0) //filters out the "0"'s from the array
        .reverse() //puts back in correct order
        .join(" + "); //joins with "+" in between
    //   console.log("result:", result)
      return result;
}