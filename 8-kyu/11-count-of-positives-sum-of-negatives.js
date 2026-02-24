// ================================
// Title: [Count of positives / sum of negatives]
// ================================
// URL: [https://www.codewars.com/kata/576bb71bbbcf0951d5000044]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// ================================

// Steps to Solve:
// Create Empty Array For The Positive Numbers
// Create a Variable For The Sum Of Negative
// Loop Throught The Given Array
// Check If The Number Is Positive Add It To The Array, If Negative Add To The Sum Variable
// ------------------------

// Solution 1: Using For Loop
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  let positivesArray = [];
  let sumNegatives = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positivesArray.push(input[i]);
    } else {
      sumNegatives += input[i];
    }
  }
  return [positivesArray.length, sumNegatives];
}

// Test Cases:
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ]),
);
