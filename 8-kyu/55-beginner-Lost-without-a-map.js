// ================================
// Title: [Beginner - Lost Without a Map]
// ================================
// URL: [https://www.codewars.com/kata/57f781872e3d8ca2a000007e]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Given an array of integers, return a new array with each value doubled.

// ================================

// Steps to Solve:
// Loop Through The Array
// Square Each Numbers
// Sum The Result

// ------------------------

// Solution 1: Use Map
function maps(x) {
  let doubled = x.map((num) => num * 2);
  return doubled;
} // Test Cases:
console.log(maps([1, 2, 3]));
