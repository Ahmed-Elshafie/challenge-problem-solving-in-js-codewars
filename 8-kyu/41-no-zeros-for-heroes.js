// ================================
// Title: [No zeros for heroes]
// ================================
// URL: [https://www.codewars.com/kata/570a6a46455d08ff8d001002/discuss]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

// ================================

// Steps to Solve:
// Convert The Number To The String
// Check If The Last Index === 0
// Remove It

// ------------------------

// Solution 1: Use &&
function noBoringZeros(n) {
  if (n === 0) return 0;
  let stringParam = String(n);
  while (stringParam.endsWith('0')) {
    stringParam = stringParam.slice(0, -1);
  }
  return Number(stringParam);
}

// Test Cases:
console.log(typeof noBoringZeros(1450));

// Solution 2: Use

// Test Cases:
