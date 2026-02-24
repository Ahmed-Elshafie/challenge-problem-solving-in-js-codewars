// ================================
// Title: [Vowel Count]
// ================================
// URL: [https://www.codewars.com/kata/54ff3102c1bad923760001f3]
// ================================
// Language: JavaScript
// ================================
// Level: [7kyu]
// ================================
// Description:
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// ================================

// Steps to Solve:

// Create Counter Var
// Convert The String Into Array
// Loop Through The Array
// Check If The Element Inside a, e, i, o, u
// Then Increase The Counter

// ------------------------

// Solution 1: Using toLowerCase, replaceAll, split, for

function getCount(str) {
  let vowels = 'aeiou';
  let count = 0;
  let strArray = str.toLowerCase().replaceAll(' ', '').split('');
  for (let i = 0; i < strArray.length; i++) {
    if (vowels.includes(strArray[i])) {
      count++;
    }
  }
  return count;
}

// Test Cases:
console.log(getCount('aracadabraE')); // 5
