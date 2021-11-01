/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
*/
function rot13(str) {
    // 65 - 90
    var arr = [];
    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
        arr.push(String.fromCharCode(str.charCodeAt(i) + 13))
      }
      else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) {
        arr.push(String.fromCharCode(str.charCodeAt(i) + 13 - 26))
      }
      else {arr.push(String.fromCharCode(str.charCodeAt(i)))}
    }
    return arr.join("")
  }
  
  rot13("SERR PBQR PNZC");