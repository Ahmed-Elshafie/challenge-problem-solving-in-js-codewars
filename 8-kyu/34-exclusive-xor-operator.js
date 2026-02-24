// ================================
// Title: [Exclusive "or" (xor) Logical Operator]
// ================================
// URL: [https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.)
// called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans.
// It then returns true if exactly one of the two expressions are true, false otherwise. For example:.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use ternary operator
function xor(a, b) {
  return a === b ? false : true;
}

// Test Cases:
console.log(xor(false, true));

// Solution 2: Use

// Test Cases:
