// ================================
// Title: [Beginner - Reduce but Grow]
// ================================
// URL: [https://www.codewars.com/kata/57f780909f7e8e3183000078]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order

// ================================

// Steps to Solve:
// Declare Variable =1
// Loop Through The Numbers Array
// Add Multiplying Result To The Var
// Return The Result

// ------------------------

// Solution 1: Use For Loop
function grow(x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}

// Test Cases:
console.log(grow([1, 2, 3, 4]));
