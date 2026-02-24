// ================================
// Title: [Formatting decimal places #0]
// ================================
// URL: [https://www.codewars.com/kata/5641a03210e973055a00000d]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// ================================

// Steps to Solve:
// Loop Through The Array
// Check If The Current Element Index Larger Than The Previous by 1 ,Continue
// If Not Return That Element
//  Return Null If All The Number Are consecutive
// ------------------------

// Solution 1: Use if
function twoDecimalPlaces(n) {
  // return n.toFixed(2);
  return Number(n.toFixed(2));
}
// Test Cases:
console.log(twoDecimalPlaces(5.5589));

// Example:
// 5.5589 is rounded 5.56
// -3.3424 is rounded -3.34
