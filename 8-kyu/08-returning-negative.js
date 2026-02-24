// ================================
// Title: [Return Negative]
// ================================
// URL: [https://www.codewars.com/kata/55685cd7ad70877c23000102]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// ================================

// Steps to Solve:
// initValue = 0
// Array Loop
// Check if the Number is Positive or Not
// Add the Number to the InitValue if Positive
// ------------------------

// Solution 1: Ternary Operator
function makeNegative(num) {
  return num > 0 ? -num : num;
}

// Test Cases:
console.log(makeNegative(10));
console.log(makeNegative(-10));
