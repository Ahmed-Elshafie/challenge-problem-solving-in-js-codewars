// ================================
// Title: [Sort and Star]
// ================================
// URL: [https://www.codewars.com/kata/57cfdf34902f6ba3d300001e]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

// ================================

// Steps to Solve:
// Sort The Array
// Get The First Value Of The Array
// Split The First Value
// Join ***

// ------------------------

// Solution 1: Use For Loop Push
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

// Test Cases:

console.log(
  twoSort([
    'bitcoin',
    'take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps',
  ]),
);
