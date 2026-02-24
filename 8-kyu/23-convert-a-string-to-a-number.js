// ================================
// Title: [Convert a String to a Number!]
// ================================
// URL: [https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use Unary plus (+)
const stringToNumber = function (str) {
  return +str;
  // return Number(str);
};
// Test Cases:
console.log(typeof stringToNumber('20'));
console.log(stringToNumber('20'));
