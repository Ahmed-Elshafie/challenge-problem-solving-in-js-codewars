// ================================
// Title: [Grasshopper - Debug sayHello]
// ================================
// URL: [https://www.codewars.com/kata/55ecd718f46fba02e5000029/javascript]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// Example output: Hello, Mr. Spock

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use Template literal
function sayHello(name) {
  // return 'Hello, ' + `${name}`;
  return `Hello, ${name}`;
}

// Test Cases:

console.log(sayHello('Mr. Spock'));
console.log(sayHello('De. McCoy'));
