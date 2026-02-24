// ================================
// Title: [Basic Mathematical Operations]
// ================================
// URL: [https://www.codewars.com/kata/57356c55867b9b7a60000bd7]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// ================================

// Steps to Solve:

// ------------------------

// Solution 1:
function basicOp(operation, value1, value2) {
  if (operation === '+') return value1 + value2;
  if (operation === '-') return value1 - value2;
  if (operation === '*') return value1 * value2;
  if (operation === '/') return value1 / value2;
}

// Test Cases:
console.log(basicOp('+', 5, 5));
console.log(basicOp('-', 5, 5));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 5, 5));

// ------------------------

// Solution 2:

function basicOp2(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// Test Cases:
console.log(basicOp('+', 5, 5));
console.log(basicOp('-', 5, 5));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 5, 5));
