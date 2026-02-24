// ================================
// Title: [Jenny's secret message]
// ================================
// URL: [https://www.codewars.com/kata/55225023e1be1ec8bc000390]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// ================================

// Steps to Solve:
// ------------------------

// Solution 1:

function greet(name) {
  return name !== 'Johnny' ? 'Hello,' + name + '!' : 'Hello, my love!';
}
// Test Cases:
console.log(greet('Ahmed'));
console.log(greet('Farida'));
console.log(greet('Johnny'));
