// ================================
// Title: [Isograms]
// ================================
// URL: [https://www.codewars.com/kata/54ba84be607a92aa900000f1]
// ================================
// Language: JavaScript
// ================================
// Level: [7kyu]
// ================================
// Description:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Using new Set, toLowerCase, split
function isIsogram(str) {
  return new Set(str.toLowerCase().split('')).size === str.length;

  // return !/(.).*\1/i.test(str);
}

// Test Cases:
console.log(isIsogram('isogram'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
