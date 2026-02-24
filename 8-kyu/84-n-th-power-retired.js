// ================================
// Title: [N-th Power (retired)]
// ================================
// URL: [https://www.codewars.com/kata/57d814e4950d8489720008db]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Removed due to copyright infringement.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use Template literal
function index(array, n) {
  return array.length - 1 < n ? -1 : Math.pow(array[n], n);
}

// Test Cases:

console.log(index([1, 2, 3, 4], 2));
