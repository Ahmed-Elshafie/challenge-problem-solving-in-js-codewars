// ================================
// Title: [Find the odd int]
// ================================
// URL: [https://www.codewars.com/kata/54da5a58ea159efa38000836]
// ================================
// Language: JavaScript
// ================================
// Level: [6kyu]
// ================================
// Description:
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// ================================

// Steps to Solve:

// Create A Map
// Loop Through The Array
// Set Key Value Pairs Of The Map
// Loop Through Those Key Value Pairs
// Check On The Value If Odd Or Even

// ------------------------

// Solution 1: Using new Map(), for of, if

function findOdd(A) {
  const countMap = new Map();
  for (let num of A) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  for (const [num, count] of countMap.entries()) {
    if (count % 2 !== 0) {
      return num;
    }
  }
  return null;
}
// Test Cases:
console.log(findOdd([1, 1, 2, 5, 8]));
