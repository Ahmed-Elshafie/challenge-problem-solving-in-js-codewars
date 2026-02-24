// ================================
// Title: [Simple Pig Latin]
// ================================
// URL: [https://www.codewars.com/kata/520b9d2ad5c005041100000f]
// ================================
// Language: JavaScript
// ================================
// Level: [5kyu]
// ================================
// Description:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// ================================

// Steps to Solve:

// Convert the string into array
// Loop through the array
// Replace the first character with empty string // Add the first character to the end of the word
// Add the "ay" to the end of the word
// Convert the array back to string

// ------------------------

// Solution 1: Using split, map, substring, join

function pigIt(str) {
  return str
    .split(' ')
    .map((word) => {
      if (/[a-zA-Z]/.test(word)) {
        return word.substring(1) + word[0] + 'ay';
      }
      return word;
    })
    .join(' ');
}
// Test Cases:
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !
