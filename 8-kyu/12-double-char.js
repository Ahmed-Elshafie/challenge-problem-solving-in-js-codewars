// ================================
// Title: [Double Char]
// ================================
// URL: [https://www.codewars.com/kata/56b1f01c247c01db92000076]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// ================================

// Steps to Solve:
// Turn The String Into Array
// Loop Throught The  Array
// Repeat Each Element Once
// Return The Array Into String Again
// ------------------------

// Solution 1: Using Map Loop, Split(), Repeat()

function doubleChar(str) {
  return str
    .split('')
    .map((s) => s.repeat(2))
    .join('');
}
// Test Cases:
console.log(doubleChar('Ahmed'));
