// ================================
// Title: [Reverse words]
// ================================
// URL: [https://www.codewars.com/kata/5259b20d6021e9e14c0010d4]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use ternary operator
function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

// Test Cases:
console.log(reverseWords('This is an example!'));
