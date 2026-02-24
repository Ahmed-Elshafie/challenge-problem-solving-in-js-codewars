// ================================
// Title: [Find The Parity Outlier]
// ================================
// URL: [https://www.codewars.com/kata/5526fc09a1bbd946250002dc]
// ================================
// Language: JavaScript
// ================================
// Level: [6kyu]
// ================================
// Description:
// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// ================================

// Steps to Solve:

// Slice The Array
// Loop through the array
// check on the numbers if even or odd
// define the type of the array
// Extract the outlier

// ------------------------

// Solution 1: Using slice, integers, filter, ternary operator
function findOutlier(integers) {
  const slicedArray = integers.slice(0, 4);
  const arrayType =
    slicedArray.filter((n) => n % 2 === 0).length > 1 ? 'Even' : 'Odd';
  if (arrayType === 'Odd') {
    return integers.filter((n) => n % 2 === 0)[0];
  } else {
    return integers.filter((n) => n % 2 !== 0)[0];
  }
}

// Test Cases:
console.log(findOutlier([2, 6, 8, 10, 30]));
