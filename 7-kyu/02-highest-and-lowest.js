// ================================
// Title: [Highest and Lowest]
// ================================
// URL: [https://www.codewars.com/kata/554b4ac871d6813a03000035]
// ================================
// Language: JavaScript
// ================================
// Level: [7kyu]
// ================================
// Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// ================================

// Steps to Solve:

// Convert The String Into Array
// Convert The String Into Numbers
// Get The Highest And Lowest Number.
// Return As String

// ------------------------

// Solution 1: Using split, map, Math.max, Math.man

function highAndLow(numbers) {
  let numArr = numbers.split(' ').map((num) => Number(num));
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}

// Test Cases:
console.log(highAndLow('1 2 3 4 5'));
