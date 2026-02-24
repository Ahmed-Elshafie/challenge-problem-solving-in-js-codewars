// ================================
// Title: [Shortest Word]
// ================================
// URL: [https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9]
// ================================
// Language: JavaScript
// ================================
// Level: [7kyu]
// ================================
// Description:
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// ================================

// Steps to Solve:

// Convert The String To An Array
// Loop Through The Array
// Check On The Shortest Length

// ------------------------

// Solution 1: Using Regex
function findShort(s) {
  return Math.min(...s.split(' ').map((word) => word.length));
}

// Test Cases:
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
