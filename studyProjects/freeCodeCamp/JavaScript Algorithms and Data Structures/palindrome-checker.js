/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
*/
// function to check if the input string is a palindrome
function palindrome(str) {
    // set an array with only word characters
    var regEx = str.toLowerCase().match(/\w/g);
    // filter the array for underscore character
    var filtered = regEx.filter(function(value) { 
      return value != "_";
    });
    var arrLength = filtered.length
    // iterate throught array to check palindromes
    for (var i = 0; i <= arrLength/2 - 1; i++) {
      // iterate both from start and end of the array
      // not valid for last two elements of arrays with even length
      if (filtered[i] == filtered[arrLength - 1 - i]) {
        console.log(filtered[i] + filtered[arrLength - 1 - i])
      }
      // check the last two elements of arrays with even length
      else if (arrLength/2 == i - 1) {
        filtered[i] == filtered [i+1] ? true : false
      }
      // if checked elements are not equal, return false
      else {return false}
    }
    // if all elements are equal, return true
    return true;
  }
  
  
  
  palindrome("almostomla");