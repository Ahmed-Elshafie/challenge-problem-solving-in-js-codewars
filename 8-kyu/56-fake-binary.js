// ================================
// Title: [Fake Binary]
// ================================
// URL: [https://www.codewars.com/kata/57eae65a4321032ce000002d]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// ================================

// Steps to Solve:
// Convert The String To Array
// Loop Through The Array
// Check Each Element

// ------------------------

// Solution 1: Use split map join
function fakeBin(x) {
  return x
    .split('')
    .map((num) => (num < '5' ? '0' : '1'))
    .join('');
}

// Test Cases:
console.log(fakeBin('1238'));
