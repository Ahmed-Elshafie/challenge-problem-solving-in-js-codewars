// ================================
// Title: [Is n divisible by x and y?]
// ================================
// URL: [https://www.codewars.com/kata/5545f109004975ea66000086]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use &&
function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true;
  } else {
    return false;
  }
}
// Test Cases:
console.log(isDivisible(4, 3, 2));
