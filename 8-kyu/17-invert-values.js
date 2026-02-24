// ================================
// Title: [Invert values]
// ================================
// URL: [https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// ================================

// Steps to Solve:
// Create Empty The New Array
// Loop Through The Array
// Inverse The Number
// Return The New Array
// ------------------------

// Solution 1: Use map()
function invert(array) {
  let newArr = array.map((num) => -num);
  return newArr;
}

// Test Cases:
console.log(invert([1, 2, -3, 4, 5]));
