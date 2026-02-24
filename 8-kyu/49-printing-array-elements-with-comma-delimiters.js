// ================================
// Title: [Printing Array elements with Comma delimiters]
// ================================
// URL: [https://www.codewars.com/kata/56e2f59fb2ed128081001328/discuss]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Input: Array of elements
// ["h","o","l","a"] Output: String with comma delimited elements of the array in th same order. "h,o,l,a".

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use For Loop
function printArray(array) {
  return array.join(',');
}

// Test Cases:
console.log(printArray(['h', 'o', 'l', 'a']));
