// ================================
// Title: [Simple multiplication]
// ================================
// URL: [https://www.codewars.com/kata/583710ccaa6717322c000105]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use Ternary Operator
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// Test Cases:
console.log(simpleMultiplication(2));
