// ================================
// Title: [Are You Playing Banjo?]
// ================================
// URL: [https://www.codewars.com/kata/56f6ad906b88de513f000d96]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"

// ================================

// Steps to Solve:
// Check The Coming Name
// If The Name Start With [R or r]  Return Playing Banjo
// If Not Doesn't Return Playing Banjo

// ------------------------

// Solution 1: Use If
// function areYouPlayingBanjo(name) {
//   // if (name.charAt(0) === 'R' || name.charAt(0) === 'r') {
//   //   return `${name} plays banjo`;
//   // } else {
//   //   return `${name} does not play banjo`;
//   // }

// }
// Test Cases:
// console.log(areYouPlayingBanjo('Resume'));

// Solution 2: ternary operator
function areYouPlayingBanjo(name) {
  return name.charAt(0) === 'R'
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
// Test Cases:
console.log(areYouPlayingBanjo('resume'));
