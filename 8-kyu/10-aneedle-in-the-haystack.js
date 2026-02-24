// ================================
// Title: [A Needle in the Haystack]
// ================================
// URL: [https://www.codewars.com/kata/56676e8fabd2d1ff3000000c]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// ================================

// Steps to Solve:
// Loop Through The Array
// Check If Element === Needle
// Return The Message
// ------------------------

// Solution 1: Using For Loop
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return 'found the needle at position ' + i;
    }
  }
}

// // Test Cases:
console.log(
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']),
);

// Solution 2: Using indexOf ()
function findNeedle2(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}

// Test Cases:
console.log(
  findNeedle2([
    'hay',
    'junk',
    'hay',
    'hay',
    'moreJunk',
    'needle',
    'randomJunk',
  ]),
);
