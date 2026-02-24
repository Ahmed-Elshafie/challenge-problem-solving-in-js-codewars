// ================================
// Title: [First non-repeating character]
// ================================
// URL: [https://www.codewars.com/kata/52bc74d4ac05d0945d00054e]
// ================================
// Language: JavaScript
// ================================
// Level: [5kyu]
// ================================
// Description:
// Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input "stress", the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase characters are considered the same character, but the function should return the correct case for the initial character. For example, the input "sTreSS" should return "T".
// If a string contains only repeating characters, return an empty string ("");
// Note: despite its name in some languages, your function should handle any Unicode codepoint:
// "@#@@*"    --> "#"
// "かか何"   --> "何"
// "🐐🦊🐐" --> "🦊"

// ================================

// Steps to Solve:

// 1️⃣ Convert the string to lower case for case-insensitive counting
// 2️⃣ Create a Map to store each character and its count
// 3️⃣ Loop through each character in the string
// 4️⃣ For each character, update its count in the Map
// 5️⃣ Loop through the original string (not lowercased)
// 6️⃣ For each character, check if its lowercased version count in the Map is 1
// 7️⃣ Return the first character that has count 1
// 8️⃣ If no such character exists, return ''

// ------------------------

// Solution 1: Using new Map(), for of, if

function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++) {
    const lowerChar = s[i].toLowerCase();
    const lowerStr = s.toLowerCase();
    if (lowerStr.indexOf(lowerChar) === lowerStr.lastIndexOf(lowerChar)) {
      return s[i];
    }
  }
  return '';
}
// Test Cases:
console.log(firstNonRepeatingLetter('@#@@*')); // #
console.log(firstNonRepeatingLetter('abba')); // ''
console.log(firstNonRepeatingLetter('aa')); // ''
console.log(firstNonRepeatingLetter('sTreSS')); // 'T'
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")); // ','
