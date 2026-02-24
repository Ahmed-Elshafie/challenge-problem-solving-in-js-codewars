// ================================
// Title: [Thinkful - Logic Drills: Traffic light]
// ================================
// URL: [https://www.codewars.com/kata/58649884a1659ed6cb000072]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow..

// ================================

// Steps to Solve:
// Create Array Of Light
// Check If The Light Is Red To Return The Geen
// Retutn The Next Color
// ------------------------

// Solution 1: Use indexOf
function updateLight(current) {
  let lightArr = ['green', 'yellow', 'red'];
  if (lightArr.indexOf(current) === 2) {
    return 'green';
  } else {
    return lightArr[lightArr.indexOf(current) + 1];
  }
}

// Test Cases:
console.log(updateLight('yellow'));
