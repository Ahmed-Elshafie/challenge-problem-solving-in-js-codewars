// ================================
// Title: [Convert number to reversed array of digits]
// ================================
// URL: [https://www.codewars.com/kata/5583090cbe83f4fd8c000051]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// ================================

// Steps to Solve:
// Change The Number To String
// Split The String To Array
// Change The Strings In The Array To Numbers
// Reverse The Array

// ------------------------

// Solution 1: Using For Loop

function digitize(num) {
  return num
    .toString()
    .split('')
    .map((num) => Number(num))
    .reverse();
}

// Test Cases:
console.log(digitize(123)); // string
