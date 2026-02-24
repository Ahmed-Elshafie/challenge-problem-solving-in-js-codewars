// ================================
// Title: [Sum of positive]
// ================================
// URL: [https://www.codewars.com/kata/5715eaedb436cf5606000381]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// You get an array of numbers, return the sum of all of the positives ones.

// ================================

// Steps to Solve:
// ------------------------

// Solution 1: Using For Loop
function sumOfPostive(arr) {
  let initValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      initValue += arr[i];
    }
  }
  return initValue;
}

// Test Cases:

console.log(sumOfPostive([1, 5, 7, -4, -2]));

// ------------------------

// Solution 2: Using filter() reduce()
function sumOfPostive2(arr) {
  return arr
    .filter((num) => num > 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Test Cases:
console.log(sumOfPostive2([1, 5, 7, -4, -2]));
