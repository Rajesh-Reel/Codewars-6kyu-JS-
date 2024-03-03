/*

6 kyu 

Kebabize

Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"

Notes:
the returned string should only contain lowercase letters

*/

function kebabize(str) {
    let result = '';
    let newStr = str.replace(/[0-9]/g, "");
    for (let i = 0; i < newStr.length; i++) {
      let char = newStr[i];
      if (char === char.toUpperCase() && i !== 0) result += '-';
      result += char.toLowerCase();
    }
    return result;
}