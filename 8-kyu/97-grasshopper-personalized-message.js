// ================================
// Title: [Grasshopper - Personalized Message]
// ================================
// URL: [https://www.codewars.com/kata/5772da22b89313a4d50012f7]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// The Story:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use ternary operator
function greet(name, owner) {
  return name === owner ? `Hello boss` : `Hello guest`;
}

// Test Cases:
console.log(greet('Daniel', 'Daniel'));
