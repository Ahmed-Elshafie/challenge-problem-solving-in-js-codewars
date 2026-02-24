// ================================
// Title: [Vowel remover (retired)]
// ================================
// URL: [https://www.codewars.com/kata/5547929140907378f9000039]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// ================================

// Steps to Solve:
// Creat An Array Includes The 5 Letters (a, e, i, o, u )
// Loop Through The String Gived
// Check If The String Includes Any Of The 5 Letters
// Return The Result

// ------------------------

// Solution 1: Use &&
function shortcut(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!vowels.includes(char)) {
      result.push(char);
    }
  }
  return result.join('');
}

// Test Cases:
console.log(shortcut('codewars'));
