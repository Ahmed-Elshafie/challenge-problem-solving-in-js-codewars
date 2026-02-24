// ================================
// Title: [Reversing Words in a String.]
// ================================
// URL: [https://www.codewars.com/kata/57a55c8b72292d057b000594]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
//You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// ================================

// Steps to Solve:
// Turn The String Into The Array
// Reverse The Array
// Turn The String Into The Array

// ------------------------

// Solution 1: Use If
function reverse(string) {
  return string.split(' ').reverse().join(' ');
}
// Test Cases:
console.log(reverse('Hello World'));
