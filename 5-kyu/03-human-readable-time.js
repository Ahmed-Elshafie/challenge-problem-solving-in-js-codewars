// ================================
// Title: [Human Readable Time]
// ================================
// URL: [https://www.codewars.com/kata/52685f7382004e774f0001f7]
// ================================
// Language: JavaScript
// ================================
// Level: [5kyu]
// ================================

// Description:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.

// ================================

// Steps to Solve:

// Get Hours
// Get Minutes
// Get Seconds
// Create Format Function
// Return The Right Format

// ------------------------

// Solution 1: Using Math, String, padStart, ternary operator

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600); // 12
  const minutes = Math.floor((seconds % 3600) / 60); // 34
  const remainingSeconds = seconds % 60; // 56
  const format = (num) => String(num).padStart(2, '0');
  return `${format(hours)}:${format(minutes)}:${format(remainingSeconds)}`;
}
// Test Cases:
console.log(humanReadable(45296));
console.log(humanReadable(59));
