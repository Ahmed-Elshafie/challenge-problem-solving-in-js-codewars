// ================================
// Title: [Expressions Matter]
// ================================
// URL: [https://www.codewars.com/kata/5ae62fcf252e66d44d00008e]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Given three integers a, b, and c, return the largest number
// obtained after inserting the operators +, *, and parentheses ().
// In other words, try every combination of a, b, and c with the operators, without reordering
// the operands, and return the maximum value.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use For Loop Push
function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, a * (b + c), (a + b) * c);
}

// Test Cases:

console.log(expressionMatter(1, 2, 3));
