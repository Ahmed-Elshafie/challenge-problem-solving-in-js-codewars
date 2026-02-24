// ================================
// Title: [Add Length]
// ================================
// URL: [https://www.codewars.com/kata/559d2284b5bb6799e9000047]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// ================================

// Steps to Solve:
// Convert The String To Arraay
// Loop Through The Array
// Return The New Words Plus Lenght

// ------------------------

// Solution 1: Use split map Template Literal
function addLength(str) {
  // return str.split(' ').map((n) => n + ' ' + n.length);
  return str.split(' ').map((n) => `${n} ${n.length}`);
}

// Test Cases:
console.log(quarteaddLengthrOf('apple ban'));
