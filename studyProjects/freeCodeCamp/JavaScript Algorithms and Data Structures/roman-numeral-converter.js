/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
*/
// function to convert decimal numbers to roman ones
function convertToRoman(num) {
    // destructure the number as an array
    var digitsArr = num.toString().split("");
    // initialize an output array where to write roman numbers
    var outputArr = [];
    // starting from the end, substitute each digit with its counterpart
    // <<< definitely need to learn algorithms after this shame >>>
    for (var i = 0; i < digitsArr.length; i++) {
      console.log(digitsArr[digitsArr.length - 1 - i])
      if (i == 0) {
        if (digitsArr[digitsArr.length - 1 - i] == 0) {outputArr.unshift("")}
        if (digitsArr[digitsArr.length - 1 - i] == 1) {outputArr.unshift("I")}
        if (digitsArr[digitsArr.length - 1 - i] == 2) {outputArr.unshift("II")}
        if (digitsArr[digitsArr.length - 1 - i] == 3) {outputArr.unshift("III")}
        if (digitsArr[digitsArr.length - 1 - i] == 4) {outputArr.unshift("IV")}
        if (digitsArr[digitsArr.length - 1 - i] == 5) {outputArr.unshift("V")}
        if (digitsArr[digitsArr.length - 1 - i] == 6) {outputArr.unshift("VI")}
        if (digitsArr[digitsArr.length - 1 - i] == 7) {outputArr.unshift("VII")}
        if (digitsArr[digitsArr.length - 1 - i] == 8) {outputArr.unshift("VIII")}
        if (digitsArr[digitsArr.length - 1 - i] == 9) {outputArr.unshift("IX")}
      }
      if (i == 1) {
        if (digitsArr[digitsArr.length - 1 - i] == 0) {outputArr.unshift("")}
        if (digitsArr[digitsArr.length - 1 - i] == 1) {outputArr.unshift("X")}
        if (digitsArr[digitsArr.length - 1 - i] == 2) {outputArr.unshift("XX")}
        if (digitsArr[digitsArr.length - 1 - i] == 3) {outputArr.unshift("XXX")}
        if (digitsArr[digitsArr.length - 1 - i] == 4) {outputArr.unshift("XL")}
        if (digitsArr[digitsArr.length - 1 - i] == 5) {outputArr.unshift("L")}
        if (digitsArr[digitsArr.length - 1 - i] == 6) {outputArr.unshift("LX")}
        if (digitsArr[digitsArr.length - 1 - i] == 7) {outputArr.unshift("LXX")}
        if (digitsArr[digitsArr.length - 1 - i] == 8) {outputArr.unshift("LXXX")}
        if (digitsArr[digitsArr.length - 1 - i] == 9) {outputArr.unshift("XC")}
      }
      if (i == 2) {
        if (digitsArr[digitsArr.length - 1 - i] == 0) {outputArr.unshift("")}
        if (digitsArr[digitsArr.length - 1 - i] == 1) {outputArr.unshift("C")}
        if (digitsArr[digitsArr.length - 1 - i] == 2) {outputArr.unshift("CC")}
        if (digitsArr[digitsArr.length - 1 - i] == 3) {outputArr.unshift("CCC")}
        if (digitsArr[digitsArr.length - 1 - i] == 4) {outputArr.unshift("CD")}
        if (digitsArr[digitsArr.length - 1 - i] == 5) {outputArr.unshift("D")}
        if (digitsArr[digitsArr.length - 1 - i] == 6) {outputArr.unshift("DC")}
        if (digitsArr[digitsArr.length - 1 - i] == 7) {outputArr.unshift("DCC")}
        if (digitsArr[digitsArr.length - 1 - i] == 8) {outputArr.unshift("DCCC")}
        if (digitsArr[digitsArr.length - 1 - i] == 9) {outputArr.unshift("CM")}
      }
      if (i == 3) {
        if (digitsArr[digitsArr.length - 1 - i] == 0) {outputArr.unshift("")}
        if (digitsArr[digitsArr.length - 1 - i] == 1) {outputArr.unshift("M")}
        if (digitsArr[digitsArr.length - 1 - i] == 2) {outputArr.unshift("MM")}
        if (digitsArr[digitsArr.length - 1 - i] == 3) {outputArr.unshift("MMM")}
  
      }
    }
    // convert the array to a string and return it
    return outputArr.join("");
  }
  
  convertToRoman(3649);