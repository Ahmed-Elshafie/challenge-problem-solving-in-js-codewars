// ================================
// Title: [Even or Odd]
// ================================
// URL: [https://www.codewars.com/kata/53da3dbb4a5168369a0000fe]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// ================================

// Steps to Solve:
// ------------------------

// Solution 1: Using if/else
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

// Test Cases:
console.log(evenOrOdd(2)); // "Even"
console.log(evenOrOdd(3)); // "Odd"
console.log(evenOrOdd(0)); // "Even"
console.log(evenOrOdd(-5)); // "Odd"

// ------------------------

// Solution 2: Using Ternary Operator
function evenOrOdd2(number) {
  return number % 2 ? 'Even' : 'Odd';
}

// Test Cases:
console.log(evenOrOdd2(2)); // "Even"
console.log(evenOrOdd2(3)); // "Odd"
console.log(evenOrOdd2(0)); // "Even"
console.log(evenOrOdd2(-5)); // "Odd"
