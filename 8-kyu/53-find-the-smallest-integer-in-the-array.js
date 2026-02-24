// ================================
// Title: [Find the smallest integer in the array]
// ================================
// URL: [https://www.codewars.com/kata/55a2d7ebe362935a210000b2]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Given an array of integers your solution should find the smallest integer.

// ================================

// Steps to Solve:
// Loop Through The Array
// Square Each Numbers
// Sum The Result

// ------------------------

// Solution 1: Use Math.min
function findSmallestInt(arr) {
  let samallest = Math.min(...arr);
  return samallest;
}
// Test Cases:
console.log(findSmallestInt([4, 15, 88, 2]));

// Solution 2: Use  Spread Operator (...)
function findSmallestInt(...arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}
// Test Cases:
console.log(findSmallestInt(4, 15, 88, 2));
