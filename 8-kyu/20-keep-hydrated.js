// ================================
// Title: [Keep Hydrated!.]
// ================================
// URL: [https://www.codewars.com/kata/582cb0224e56e068d800003c]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.
// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use If
function litres(time) {
  return Math.floor(time / 2);
}
// Test Cases:
console.log(litres(7));
