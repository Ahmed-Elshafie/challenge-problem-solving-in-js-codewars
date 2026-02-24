// ================================
// Title: [Sum Arrays
// ================================
// URL: [https://www.codewars.com/kata/53dc54212259ed3d4f00071c]
// ================================
// Language: JavaScript]
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use reduce
function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Test Cases:
console.log(sum([1, 5.2, 4, 0, -1]));
