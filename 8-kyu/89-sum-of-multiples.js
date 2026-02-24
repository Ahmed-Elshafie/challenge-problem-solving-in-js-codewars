// ================================
// Title: [Sum of Multiples]
// ================================
// URL: [https://www.codewars.com/kata/57241e0f440cd279b5000829]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Your Job
// Find the sum of all multiples of n below m
// Keep in Mind
// n and m should be natural numbers (positive integers). Otherwise, see the examples in your language about how to handle invalid input values.
// m is excluded from the multiples

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use For Loop
function sumMul(n, m) {
  if (n <= 0 || m <= 0) {
    return 'INVALID';
  }
  let finalSum = 0;
  for (let i = n; i < m; i += n) {
    finalSum += i;
  }

  return finalSum;
}
// Test Cases:

console.log(sumMul(2, 9));
