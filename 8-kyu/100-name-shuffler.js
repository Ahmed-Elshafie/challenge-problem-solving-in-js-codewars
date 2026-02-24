// ================================
// Title: [Name Shuffler]
// ================================
// URL: [https://www.codewars.com/kata/559ac78160f0be07c200005a]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write a function that returns a string in which firstname is swapped with last name.
// Example(Input --> Output)
// "john McClane" --> "McClane john".

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use split, Reverse, Join
function nameShuffler(str) {
  return str.split(' ').reverse().join(' ');
}

// Test Cases:
console.log(nameShuffler('john McClane'));
