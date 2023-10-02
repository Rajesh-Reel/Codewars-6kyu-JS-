/*

6 kyu 

The Vowel Code 

Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

*/

function encode(string) {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i].match(/[aeiou]/g)) {
        if (string[i] == "a") arr.push(1);
        if (string[i] == "e") arr.push(2);
        if (string[i] == "i") arr.push(3);
        if (string[i] == "o") arr.push(4);
        if (string[i] == "u") arr.push(5);
      } else {
        arr.push(string[i]);
      }
    }
    return arr.join("");
}
  
  function decode(string) {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i].match(/[1-5]/g)) {
        if (string[i] == "1") arr.push("a");
        if (string[i] == "2") arr.push("e");
        if (string[i] == "3") arr.push("i");
        if (string[i] == "4") arr.push("o");
        if (string[i] == "5") arr.push("u");
      } else {
        arr.push(string[i]);
      }
    }
    return arr.join("");
}