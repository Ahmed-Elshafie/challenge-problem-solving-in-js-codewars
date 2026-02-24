// ================================
// Title: [Calculate average.]
// ================================
// URL: [https://www.codewars.com/kata/57a55c8b72292d057b000594]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.

// ================================

// Steps to Solve:
// Create Variable = 0
// Loop Through The Array
// Divide The Variable To The Array Length

// ------------------------

// Solution 1: Use If, For()
function findAverage(array) {
  if (array.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let finalAnswer = sum / array.length;
  return finalAnswer;
}
// Test Cases:
console.log(findAverage([2, 4, 6, 8]));

// Solution 1: Use Reduce
function findAverage(array) {
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}
// Test Cases:
console.log(findAverage([20, 4, 6, 8]));
