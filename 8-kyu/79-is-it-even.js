// ================================
// Title: [Is it even?]
// ================================
// URL: [https://www.codewars.com/kata/555a67db74814aa4ee0001b5]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use For Loop Push
function testEven(n) {
  return n % 2 === 0;
}

// Test Cases:

console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(2));
console.log(testEven(-4));
