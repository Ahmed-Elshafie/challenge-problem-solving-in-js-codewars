// ================================
// Title: [Square Every Digit]
// ================================
// URL: [https://www.codewars.com/kata/546e2562b03326a88e000020/javascript]
// ================================
// Language: JavaScript
// ================================
// Level: [7kyu]
// ================================
// Description:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
// Happy Coding!.

// ================================

// Steps to Solve:

// Convert The Number Into String
// Convert The String Into Array
// Loop Through The Array
// Convert Each Element To A Number And Squar It
// Convert A Numbers To A String

// ------------------------

// Solution 1: Using split, map, Math.pow, join, toString, Number
function squareDigits(num) {
  return Number(
    num
      .toString()
      .split('')
      .map((n) => Math.pow(n, 2))
      .join(''),
  );
}
// Test Cases:
console.log(squareDigits('2 1 1 2'));
