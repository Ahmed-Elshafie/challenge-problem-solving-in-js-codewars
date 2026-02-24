// ================================
// Title: [Stop gninnipS My sdroW!]
// ================================
// URL: [https://www.codewars.com/kata/5264d2b162488dc400000001]
// ================================
// Language: JavaScript
// ================================
// Level: [6kyu]
// ================================
// Description:
// Write a function that takes in a string of one or more words,
// and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples:
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

// ================================

// Steps to Solve:

// Split The String Into Array Of Words
// Loop Through The Splitted Array
// Check If The Word Letters AreFive Or More
// Convert The String Into Array
// Reverse The Array And Then Join To Return To String
// If The WordsLess Than 5 Return The Same String

// ------------------------

// Solution 1: Using split, filter, for loop, push, if

function spinWords(string) {
  const splitteddArr = string.split(' ');
  let finalResult = [];
  for (let i = 0; i < splitteddArr.length; i++) {
    if (splitteddArr[i].length >= 5) {
      finalResult.push(splitteddArr[i].split('').reverse().join(''));
    } else {
      finalResult.push(splitteddArr[i]);
    }
  }
  return finalResult.join(' ');
}
// Test Cases:
console.log(spinWords('Hey fellow warriors'));
console.log(spinWords('Welcome'));
console.log(spinWords('This is a test'));
console.log(spinWords('This is another test'));
