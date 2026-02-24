// ================================
// Title: [Convert a Number to a String!.]
// ================================
// URL: [https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use toString()
function numberToString(num) {
  return num.toString();
}

// Test Cases:
console.log(typeof numberToString(20) + numberToString(20));

// Solution 2: Use toString()
function numberToString(num) {
  return `${num}`;
}

// Test Cases:
console.log(typeof numberToString(20) + numberToString(20));
