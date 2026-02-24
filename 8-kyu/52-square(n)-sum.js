// ================================
// Title: [Square(n) Sum]
// ================================
// URL: [https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 12+22+22=9.

// ================================

// Steps to Solve:
// Loop Through The Array
// Square Each Numbers
// Sum The Result

// ------------------------

// Solution 1: Use Reduce
function squareSum(numbers) {
  return numbers.map((n) => n * n).reduce((acc, curr) => acc + curr);
}
// Test Cases:
console.log(squareSum([1, 2, 2]));
