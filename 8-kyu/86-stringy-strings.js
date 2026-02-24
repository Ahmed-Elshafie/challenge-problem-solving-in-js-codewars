// ================================
// Title: [Stringy Strings]
// ================================
// URL: [https://www.codewars.com/kata/563b74ddd19a3ad462000054]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.

// ================================

// Steps to Solve:
// Create Function String And Pass (Size)
// Create Empty String
// Loop Through The Given Size
// Check On The Number
// If The Number Is Odd Return 1
// If The Number Is Even Return 0
// Return The Final String

// ------------------------

// Solution 1: Use For Loop
function stringy(size) {
  let strResult = '';
  for (let i = 1; i <= size; i++) {
    if (i % 2 === 0) {
      strResult += '0';
    } else {
      strResult += '1';
    }
  }
  return strResult;
}
// Test Cases:

console.log(stringy(4));
