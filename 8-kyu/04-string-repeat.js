// ================================
// Title: [String repeat]
// ================================
// URL: [https://www.codewars.com/kata/57a0e5c372292dd76d000d7e]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// ================================

// Steps to Solve:
// Create Empty String
// Take The Number Argument And Loop Throught It
// Add The String To The Empty One

// ------------------------

// Solution 1: Using For Loop

function repeatString(num, str) {
  let newString = '';
  for (let i = 0; i < num; i++) {
    newString += str;
  }
  return newString;
}

// // Test Cases:
console.log(repeatString(3, ' copy'));

// ------------------------

// Solution 2: Using repeat()

function repeatString(num, str) {
  return str.repeat(num);
}

// Test Cases:
console.log(repeatString(3, ' copy'));
