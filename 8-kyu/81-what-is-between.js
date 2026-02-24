// ================================
// Title: [What is between?]
// ================================
// URL: [https://www.codewars.com/kata/55ecd718f46fba02e5000029/javascript]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between
//  the input parameters, including them.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use Array, fill, map
function between(a, b) {
  return Array(b - a + 1)
    .fill(a)
    .map((num, i) => num + i);
}
// Test Cases:

console.log(between(1, 4));

// Solution 2: Use Array.from
function between(a, b) {
  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}
// Test Cases:

console.log(between(1, 4));
