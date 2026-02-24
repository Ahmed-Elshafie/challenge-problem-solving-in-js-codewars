// ================================
// Title: [Replace With Alphabet Position]
// ================================
// URL: [https://www.codewars.com/kata/546f922b54af40e1e90001da]
// ================================
// Language: JavaScript
// ================================
// Level: [6kyu]
// ================================
// Description:
// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// ================================

// Steps to Solve:

// Create a variable containing all the alphapet letters
// Create empty string (Final Result )
// Loop through the string
// Find the index of each letter
// Include in the final Result
// ------------------------

// Solution 1: Using toLowerCase(), split(), filter(), map(), charCodeAt() ,join()

// function alphabetPosition(text) {
//   return text
//     .toLowerCase()
//     .split('')
//     .filter((char) => char >= 'a' && char <= 'z')
//     .map((char) => char.charCodeAt(0) - 96)
//     .join(' ');
// }

// // Test Cases:
// console.log(alphabetPosition("The sunset sets at twelve o' clock"));

function alphabetPosition(text) {
  const loweredCaseText = text.toLowerCase();
  const alphetLetters = 'abcdefghijklmnopqrstuvwxyz';
  let finalResult = '';

  for (let i = 0; i < loweredCaseText.length; i++) {
    if (alphetLetters.indexOf(loweredCaseText[i]) > -1) {
      finalResult += alphetLetters.indexOf(loweredCaseText[i]) + 1 + ' ';
    }
  }
  return finalResult.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock"));
