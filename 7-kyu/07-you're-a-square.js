// ================================
// Title: [You're a square!]
// ================================
// URL: [https://www.codewars.com/kata/54c27a33fb7da0db0100040e]
// ================================
// Language: JavaScript
// ================================
// Level: [7kyu]
// ================================
// Description:
// A square of squares
// You like building blocks. You especially like building blocks that are squares.
// And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead,
// you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Using if, Math.sqrt
var isSquare = function (n) {
  if (n < 0) return false;
  return Math.sqrt(n) % 1 === 0;
};

// Test Cases:
console.log(isSquare(-1)); //false
console.log(isSquare(0)); // true
console.log(isSquare(3)); // false
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true
