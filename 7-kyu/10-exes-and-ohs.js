// ================================
// Title: [Exes and Ohs]
// ================================
// URL: [https://www.codewars.com/kata/55908aad6620c066bc00002a]
// ================================
// Language: JavaScript
// ================================
// Level: [7kyu]
// ================================
// Description:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Using Regex
function XO(str) {
  return (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;
}

// Test Cases:
console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('zzssS'));
