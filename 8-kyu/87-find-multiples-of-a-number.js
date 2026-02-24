// ================================
// Title: [Find Multiples of a Number]
// ================================
// URL: [https://www.codewars.com/kata/58ca658cc0d6401f2700045f]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// In this simple exercise, you will write a function that takes two integers;
// n and limit; and returns a list of the multiples of n up to and possibly including limit.
// It is guaranteed that n > 0 and limit >= n.
// For example, if the parameters passed are (2, 6),
// the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6..

// ================================

// Steps to Solve:
// Create Function
// Create Empty Array
// Loop Through Limit
// Check On The Number
// Create Variable To Get Multiply
// Check If Multiply === Limit
// If Equal Add Then Break The Loop
// If Not Add And Continue
// Return The Final Array

// ------------------------

// Solution 1: Use For Loop, Push
function findMultiples(integer, limit) {
  let finalArr = [];
  // for (let i = 1; i <= limit; i++) {
  //   let multiply = integer * i;
  //   if (multiply === limit) {
  //     finalArr.push(multiply);
  //     break;
  //   } else if (multiply > limit) {
  //     break;
  //   } else {
  //     finalArr.push(multiply);
  //   }
  // }
  for (let i = integer; i <= limit; i += integer) {
    finalArr.push(i);
  }
  return finalArr;
}
// Test Cases:

console.log(findMultiples(5, 25));
