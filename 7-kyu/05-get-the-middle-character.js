// ================================
// Title: [Get the Middle Character]
// ================================
// URL: [https://www.codewars.com/kata/56747fd5cb988479af000028]
// ================================
// Language: JavaScript
// ================================
// Level: [7kyu]
// ================================
// Description:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Using Ternary Operator
function getMiddle(s) {
  return s.length % 2 === 0
    ? s[s.length / 2 - 1] + s[s.length / 2]
    : s[Math.ceil(s.length / 2) - 1];
}

// Test Cases:
console.log(getMiddle('testing'));
console.log(getMiddle('test')); // es
console.log(getMiddle('middle')); // dd
