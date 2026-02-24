// ================================
// Title: [Mumbling]
// ================================
// URL: [https://www.codewars.com/kata/5667e8f4e3f572a8f2000039]
// ================================
// Language: JavaScript
// ================================
// Level: [7kyu]
// ================================
// Description:
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// ================================

// Steps to Solve:

// Convert the string to Lower Case
// Convert the string into Array
// Loop through the array
// Catch the letter and convert it to Upper case
// Join the array back into a string

// ------------------------

// Solution 1: Using Ternary Operator
function accum(s) {
  return s
    .split('')
    .map((char, i) => {
      return char.toUpperCase() + char.toLowerCase().repeat(i);
    })
    .join('-');
}

// Test Cases:
console.log(accum('abcD'));
