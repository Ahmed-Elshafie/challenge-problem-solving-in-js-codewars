// ================================
// Title: [Does my number look big in this?]
// ================================
// URL: [https://www.codewars.com/kata/5287e858c6b5a9678200083c]
// ================================
// Language: JavaScript
// ================================
// Level: [6kyu]
// ================================
// Description:
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata,
// we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcissistic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// ================================

// Steps to Solve:

// Get The Numbers Of The Digit
// Convert The Number To String
// Split The Converted Number To Array
// Loop Through The Numbers Array
// Raise Each Numbers To The Power
// Sum All The Result
// Check If The Final Result === The Given Number

// ------------------------

// Solution 1: Using String, Number, split, map, reduce
function narcissistic(value) {
  const numberOfDigits = String(value).length;
  const finalSumResult = String(value)
    .split('')
    .map((num) => Math.pow(Number(num), numberOfDigits))
    .reduce((acc, cuu) => acc + cuu);
  return finalSumResult === value;
}

// Test Cases:
console.log(narcissistic(153));
