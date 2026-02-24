// ================================
// Title: [Grasshopper - Summation]
// ================================
// URL: [https://www.codewars.com/kata/55d24f55d7dd296eb9000030]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write a program that finds the summation of every number from 1 to num (both inclusive).
// The number will always be a positive integer greater than 0.
// Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// ================================

// Steps to Solve:
// Decalare The Result Var
// Loop Through The Given Number
// Add The Number
// Return The Result

// ------------------------

// Solution 1: Use For Loop
var summation = function (num) {
  // let result = 0;
  // for (let i = 0; i <= num; i++) {
  //   result += i;
  // }
  // return result;

  return Array(num)
    .fill(true)
    .reduce((acc, curr, index) => acc + index + 1, 0);
};

// Test Cases:
console.log(summation(8));
