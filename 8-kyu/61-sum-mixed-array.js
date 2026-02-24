// ================================
// Title: [Sum Mixed Array]
// ================================
// URL: [https://www.codewars.com/kata/57eaeb9578748ff92a000009]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number..

// ================================

// Steps to Solve:
// Loop Through The Array
// Convert String To Number
// Sum All Number
// ------------------------

// Solution 1: Use Unary Plus Operator, Reduce
function sumMix(x) {
  return x.reduce((acc, curr) => acc + +curr, 0);
}

// Test Cases:
console.log(sumMix([9, 3, '7', '3']));

// Solution 1: Use Reduce, If
function sumMix(x) {
  return x.reduce((acc, curr) => {
    let value;

    if (typeof curr === 'string') {
      value = parseInt(curr);
    } else {
      value = curr;
    }

    return acc + value;
  }, 0);
}

// Test Cases:

console.log(sumMix([9, 3, '7', '3']));
