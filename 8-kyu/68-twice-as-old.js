// ================================
// Title: [Twice as old]
// ================================
// URL: [https://www.codewars.com/kata/5b853229cfde412a470000d0]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Your function takes two arguments:
// 1-current father's age (years)
// 2-current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use ternary operator
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// Test Cases:
console.log(twiceAsOld(36, 7)); // 22
