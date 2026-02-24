// ================================
// Title: [Find numbers which are divisible by given number]
// ================================
// URL: [https://www.codewars.com/kata/55edaba99da3a9c84000003b]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
// First argument is an array of numbers and the second is the divisor.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use ternary operator
function divisibleBy(numbers, divisor) {
  return numbers.filter((n) => n % divisor === 0);
}
// Test Cases:
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
