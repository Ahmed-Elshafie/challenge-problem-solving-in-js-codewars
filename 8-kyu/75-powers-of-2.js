// ================================
// Title: [Powers of 2]
// ================================
// URL: [https://www.codewars.com/kata/57a083a57cb1f31db7000028]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Complete the function that takes a non-negative integer n as input,
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive )..

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use For Loop Push
function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
}
// Test Cases:

console.log(powersOfTwo(4));
