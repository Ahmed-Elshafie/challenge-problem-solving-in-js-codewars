// ================================
// Title: [Count by X]
// ================================
// URL: [https://www.codewars.com/kata/5513795bd3fafb56c200049e]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).
// ================================

// Steps to Solve:
// Create New Empty Array
// Loop Thought N
// Multiply X * N
// Add The Number To The New Array
// Return The New  Array
// ------------------------

// Solution 1: Use For Loop
function countBy(x, n) {
  let newArray = [];
  for (let i = 1; i <= n; i++) {
    newArray.push(x * i);
  }
  return newArray;
}
// Test Cases:

console.log(countBy(2, 5));
// ------------------------

// Solution 2: Use Map Loop Array.from .slice .keys

function countBy2(x, n) {
  return Array.from(Array(n + 1).keys())
    .slice(1)
    .map((num) => num * x);
}
// Test Cases:

console.log(countBy2(2, 4));
