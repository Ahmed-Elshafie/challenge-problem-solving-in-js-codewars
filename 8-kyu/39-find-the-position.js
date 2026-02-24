// ================================
// Title: [Find the position!]
// ================================
// URL: [https://www.codewars.com/kata/56f6ad906b88de513f000d96]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// When provided with a letter, return its position in the alphabet.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use charCodeAt
function position(letter) {
  // if (letter === 'a') return 1;
  // else if (letter === 'b') return 2;
  // else if (letter === 'c') return 3;
  // else if (letter === 'd') return 4;
  // else if (letter === 'e') return 5;
  // else if (letter === 'f') return 6;
  // else if (letter === 'g') return 7;
  // else if (letter === 'h') return 8;
  // else if (letter === 'i') return 9;
  // else if (letter === 'j') return 10;
  // else if (letter === 'k') return 11;
  // else if (letter === 'l') return 12;
  // else if (letter === 'm') return 13;
  // else if (letter === 'n') return 14;
  // else if (letter === 'o') return 15;
  // else if (letter === 'p') return 16;
  // else if (letter === 'q') return 17;
  // else if (letter === 'r') return 18;
  // else if (letter === 's') return 19;
  // else if (letter === 't') return 20;
  // else if (letter === 'u') return 21;
  // else if (letter === 'v') return 22;
  // else if (letter === 'w') return 23;
  // else if (letter === 'x') return 24;
  // else if (letter === 'y') return 25;
  // else if (letter === 'z') return 26;
  return 'Position of alphabet: ' + (letter.charCodeAt(0) - 96);
}

// Test Cases:
console.log(position('y'));
