// ================================
// Title: [Remove String Spaces]
// ================================
// URL: [https://www.codewars.com/kata/57eae20f5500ad98e50002c5]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write a function that removes the spaces from the string, then return the resultant string.
// ================================

// Steps to Solve:
// ------------------------

// Solution 1: Use split() join()
function noSpace(x) {
  return x.split('').join('');
}

// Test Cases:
console.log(noSpace('Ahmed'));
