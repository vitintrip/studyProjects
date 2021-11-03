/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
*/
function telephoneCheck(str) {
    // filter digits only
    let arrDigits = str.match(/\d/g);
    // filter non space chars only
    let arrWords = str.match(/\S/g);
    // filter cpecial chars only
    let specialChars = str.match(/\W/g);
    // set a string of allowed special chars
    let allowedChars = ["", " ", "(", ")", "-"].join("")
  
    // if there are any special chars, check that there're only allowed ones
    if (specialChars) {
      for (var i = 0; i < specialChars.length; i++) {
        if (allowedChars.includes(specialChars[i])) {continue}
        else {return false}
      }
    }
  
    // check if the last 4 characters are only digits
    let checkRegex = /[\d][\d][\d][\d]$/;
    if (!checkRegex.test(str)) {return false}
  
    // check 10 digits phone number without country code
    if (arrDigits.length == 10) {
      // check if the area code is between brackets
      if (str.includes("(") || str.includes(")")) {
        if (arrWords[0] == "(" && arrWords[4] == ")") {return true}
        else {return false}
      }
      return true;
    }
    // check 11 digits phone numbers with country code of "1"
    else if (arrDigits.length == 11 && str[0] == 1) {
      // check if brackets are used correctly for area code
      if (str.includes("(") || str.includes(")")) {
        if (arrWords[1] == "(" && arrWords[5] == ")") {return true}
        else {return false}
      }
      // if no brackets are used for area code, return true
      return true;
    }
    // if the number is not 10 or 11 digits, return false
    else {return false}
  }
  
  telephoneCheck("1 555-555-5555");