// ================================
// Title: [Grasshopper - Terminal game move function]
// ================================
// URL: [https://www.codewars.com/kata/563a631f7cbbc236cf0000c2]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use Template literal
function move(position, roll) {
  return roll * 2 + position;
}

// Test Cases:

console.log(move(3, 6));
