// ================================
// Title: [Remove duplicates from list]
// ================================
// URL: [https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.

// ================================

// Steps to Solve:
// Create Function
// Loop Through The Given Array
// Check On The Number
// Create Variable To Get Multiply
// If Exist Ignore It, If Not Push It To Our Array
// Return The Final Array

// ------------------------

// Solution 1: Use For Loop
function distinct(a) {
  let finalArray = [];
  for (let i = 0; i < a.length; i++) {
    if (finalArray.indexOf(a[i]) === -1) {
      finalArray.push(a[i]);
    }
  }

  return finalArray;
}
// Test Cases:

console.log(distinct([1, 1, 2]));

// Solution 2: Use new Set
function distinct(a) {
  let uniqueValue = new Set(a);

  return [...uniqueValue];
}
// Test Cases:

console.log(distinct([1, 1, 2]));
