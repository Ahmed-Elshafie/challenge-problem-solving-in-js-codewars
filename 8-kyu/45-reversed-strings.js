// ================================
// Title: [Reversed Strings]
// ================================
// URL: [https://www.codewars.com/kata/5168bb5dfe9a00b126000018]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Complete the solution so that it reverses the string passed into it.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use split() reverse() join()
function solution(str) {
  return str.split('').reverse().join('');
}

// Test Cases:
console.log(solution('Hello'));
