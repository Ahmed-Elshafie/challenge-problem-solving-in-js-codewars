// ================================
// Title: [L1: Set Alarm]
// ================================
// URL: [https://www.codewars.com/kata/568dcc3c7f12767a62000038]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed,
// is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation..
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm).
// It should return false otherwise.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use &&
function setAlarm(employed, vacation) {
  return employed && !vacation;
}

// Test Cases:
console.log(setAlarm(true, false));
