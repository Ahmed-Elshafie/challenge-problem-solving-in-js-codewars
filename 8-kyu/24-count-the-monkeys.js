// ================================
// Title: [Count the Monkeys!]
// ================================
// URL: [https://www.codewars.com/kata/56f69d9f9400f508fb000ba7]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// For example(Input --> Output
// ================================

// Steps to Solve:
// Create Empty Array
// Loop Through The Number Given
// Push Yhe Number Into To The New Array
// Return The Array

// ------------------------

// Solution 1: Use For Loop
function monkeyCount(n) {
  let newArr = [];
  for (let i = 1; i <= n; i++) {
    newArr.push(i);
  }
  return newArr;
}
// Test Cases:
console.log(monkeyCount([10]));
