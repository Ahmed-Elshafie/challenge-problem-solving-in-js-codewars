// ================================
// Title: [Exclamation marks series #1: Remove an exclamation mark from the end of string]
// ================================
// URL: [https://www.codewars.com/kata/56f6ad906b88de513f000d96]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use If
function remove(string) {
  if (string.endsWith('!')) {
    return string.slice(0, -1);
  }
  return string;
}
// Test Cases:
console.log(remove('Hi!!!'));
console.log(remove('Hello'));
