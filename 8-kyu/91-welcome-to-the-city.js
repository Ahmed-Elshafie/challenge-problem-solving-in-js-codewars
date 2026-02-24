// ================================
// Title: [Welcome to the City]
// ================================
// URL: [https://www.codewars.com/kata/5302d846be2a9189af0001e4]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each,
// and the length of the name array in test cases will vary..

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use For Loop
function sayHello(name, city, state) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}

// Test Cases:
console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
