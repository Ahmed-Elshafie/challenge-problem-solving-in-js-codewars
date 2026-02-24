// ================================
// Title: [Odd or Even?]
// ================================
// URL: [https://www.codewars.com/kata/5949481f86420f59480000e7/javascript]
// ================================
// Language: JavaScript
// ================================
// Level: [7kyu]
// ================================
// Description:
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"

// ================================

// Steps to Solve:

// Sum All Numbers
// Loop Through The Array
// Check If The Sum % 2 === 0

// ------------------------

// Solution 1: Using reduce
function oddOrEven(array) {
  let sum = array.reduce((acc, curr) => acc + curr, 0);
  let result = sum % 2 === 0 ? 'even' : 'odd';
  return result;
}

// Test Cases:
console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, -1, -5]));
