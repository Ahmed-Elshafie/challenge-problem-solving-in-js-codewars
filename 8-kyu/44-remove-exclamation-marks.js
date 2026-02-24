// ================================
// Title: [Remove exclamation marks]
// ================================
// URL: [https://www.codewars.com/kata/57a0885cbb9944e24c00008e]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// ================================

// Steps to Solve:
// Creat An Array Includes The 5 Letters (a, e, i, o, u )
// Loop Through The String Gived
// Check If The String Includes Any Of The 5 Letters
// Return The Result

// ------------------------

// Solution 1: Use Regex
function removeExclamationMarks(s) {
  return s.replace(/[!]/g, '');
}

// Test Cases:
console.log(removeExclamationMarks('H!ello! World!'));

// Solution 2: Use split() join()
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

// Test Cases:
console.log(removeExclamationMarks('H!ello! World!'));
