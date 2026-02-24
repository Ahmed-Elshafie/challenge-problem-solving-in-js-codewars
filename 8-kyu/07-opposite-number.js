// ================================
// Title: [Opposite number]
// ================================
// URL: [https://www.codewars.com/kata/56dec885c54a926dcd001095]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
//  Very simple, given a number, find its opposite (additive inverse).
// ================================

// Steps to Solve:
// initValue = 0
// Loop Through The Array
// Check If The Sheep === True , Increase The initValue + 1
// Reverse The Array

// ------------------------

// Solution 1:
function opposite(number) {
  return number * -1;
}

// Test Cases:
console.log(opposite(8));

// Solution 2:
function opposite2(number) {
  return -number;
}

// Test Cases:
console.log(opposite2(-8));
