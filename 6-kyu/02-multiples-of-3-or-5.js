// ================================
// Title: [Multiples of 3 or 5]
// ================================
// URL: [https://www.codewars.com/kata/514b92a657cdc65150000006]
// ================================
// Language: JavaScript
// ================================
// Level: [6kyu]
// ================================
// Description:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If a number is a multiple of both 3 and 5, only count it once.
// Courtesy of projecteuler.net (Problem 1).

// ================================

// Steps to Solve:

// Create Var = 0
// Loop Through The Numbers Below The Given Numbers
// Check If The Numbers Can Be Devided By 3 Or 5
// Sum The Numbers

// ------------------------

// Solution 1: Using sort, filter, for loop, if

function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
// Test Cases:
console.log(solution(10));
