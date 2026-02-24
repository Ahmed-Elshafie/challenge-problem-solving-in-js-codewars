// ================================
// Title: [Sum of Digits / Digital Root]
// ================================
// URL: [https://www.codewars.com/kata/541c8630095125aba6000c00]
// ================================
// Language: JavaScript
// ================================
// Level: [6kyu]
// ================================
// Description:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// ================================

// Steps to Solve:

// Check If N Just One Number
// Convert the N into Array
// Convert the String into Array
// Loop through the array
// Convert Each Items Into Number And Sum All Of Them
// Repeat The Function Again

// ------------------------

// Solution 1: Using If, String, split, map, reduce
function digitalRoot(n) {
  if (n < 10) return n;
  let sumResult = String(n)
    .split('')
    .map((num) => Number(num))
    .reduce((acc, cuu) => acc + cuu);
  return digitalRoot(sumResult);
}

// Test Cases:
console.log(digitalRoot(16));
console.log(digitalRoot(132189));
console.log(digitalRoot(9));
