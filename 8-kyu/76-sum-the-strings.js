// ================================
// Title: [Sum The Strings]
// ================================
// URL: [https://www.codewars.com/kata/5966e33c4e686b508700002d]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use For Loop Push
function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

// Test Cases:

console.log(sumStr('34', '5'));
