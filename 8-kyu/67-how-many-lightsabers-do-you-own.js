// ================================
// Title: [How many lightsabers do you own?]
// ================================
// URL: [https://www.codewars.com/kata/51f9d93b4095e0a7200001b8]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Inspired by the development team at Vooza, write the function that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// Note: your function should have a default parameter.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use ternary operator
function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}

// Test Cases:
console.log(howManyLightsabersDoYouOwn('Adam'));
console.log(howManyLightsabersDoYouOwn('Zach'));
console.log(howManyLightsabersDoYouOwn());
