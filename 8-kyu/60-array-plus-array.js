// ================================
// Title: [Array plus array]
// ================================
// URL: [https://www.codewars.com/kata/5a2be17aee1aaefe2a000151]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// ================================

// Steps to Solve:
// ------------------------

// Solution 1: Use reduce
function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((arr, curr) => arr + curr, 0);
}

// Test Cases:
console.log(arrayPlusArray([2, 4], [1, 9]));
