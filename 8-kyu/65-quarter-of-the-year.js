// ================================
// Title: [Quarter of the year]
// ================================
// URL: [https://www.codewars.com/kata/5ce9c1000bab0b001134f5af]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter;
// and month 11 (November), is part of the fourth quarter.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use ternary operator
const quarterOf = (month) => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
};

// Test Cases:
console.log(quarterOf(3));
