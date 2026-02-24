// ================================
// Title: [Convert boolean values to strings 'Yes' or 'No'.]
// ================================
// URL: [https://www.codewars.com/kata/53369039d7ab3ac506000467]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// ================================

// Steps to Solve:
// Check If The Argument, True Return "Yes" If Not Return "No".

// ------------------------

// Solution 1: Use If
function boolToWord(bool) {
  if (bool === true) {
    return 'Yes';
  } else {
    return 'No';
  }
}
// Test Cases:
console.log(boolToWord('jj'));
