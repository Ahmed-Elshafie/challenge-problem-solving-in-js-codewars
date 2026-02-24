// ================================
// Title: [Is it a palindrome?]
// ================================
// URL: [https://www.codewars.com/kata/57a1fd2ce298a731b20006a4]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// ================================

// Steps to Solve:
// Convert The String To LowerCase
// Convert The String To Array
// Reverse Array
// Convert To String
// Check The Given String To The One Created

// ------------------------

// Solution 1: Use toLowerCase split reverse join
function isPalindrome(x) {
  let lowerX = x.toLowerCase();
  let reversedX = x.toLowerCase().split('').reverse().join('');
  return reversedX === lowerX;
}

// Test Cases:
console.log(isPalindrome('Papa'));
