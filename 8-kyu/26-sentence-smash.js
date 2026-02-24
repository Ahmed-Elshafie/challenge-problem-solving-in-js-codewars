// ================================
// Title: [Sentence Smash]
// ================================
// URL: [https://www.codewars.com/kata/53dc23c68a0c93699800041d]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write a function that takes an array of words and smashes them
// together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation,
// but you should add spaces between each word. Be careful,
// there shouldn't be a space at the beginning or the end of the sentence!.
// ================================

// Steps to Solve:


// ------------------------

// Solution 1: Use Join()
function smash(words) {
  return words.join(' ');
}
// Test Cases:
console.log(smash(['hello', 'world', 'this', 'is', 'great']));
