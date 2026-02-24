// ================================
// Title: [Grasshopper - Messi goals function]
// ================================
// URL: [https://www.codewars.com/kata/55f73be6e12baaa5900000d4]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Messi goals function
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use Template literal
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Test Cases:

console.log(goals(5, 10, 2));
