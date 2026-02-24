// ================================
// Title: [Jaden Casing Strings]
// ================================
// URL: [https://www.codewars.com/kata/5390bac347d09b7da40006f6]
// ================================
// Language: JavaScript
// ================================
// Level: [7kyu]
// ================================
// Description:
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// ================================

// Steps to Solve:

// Convert The String To An Array
// Loop Through The Array
// Captalize Each Words
// Convert It To String

// ------------------------

// Solution 1: Using prototype

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
};
// Test Cases:
let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
// How Can Mirrors Be Real If Our Eyes Aren't Real

// // Solution 2: Using defineProperty

// Object.defineProperty(String.prototype, 'toJadenCase', {
//   value: function () {
//     return this.split(' ')
//       .map((word) => word[0].toUpperCase() + word.substring(1))
//       .join(' ');
//   },
//   writable: true,
//   configurable: true,
//   enumerable: false,
// });

// // Test Cases:
// let str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase());
// // How Can Mirrors Be Real If Our Eyes Aren't Real
