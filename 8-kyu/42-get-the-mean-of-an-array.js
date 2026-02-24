// ================================
// Title: [Get the mean of an array]
// ================================
// URL: [https://www.codewars.com/kata/563e320cee5dddcf77000158]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

// ================================

// Steps to Solve:
// Declare Sum Variable To Sum All The Number
// Declare Empyty Variable For The Average
// Looping Through The Array Of Numbers
// Add Each Numbers To The Sum Variable
// Devide The Sum / The Array Length
// Round The Number To The Nearest Integer
// Return The Average

// ------------------------

// Solution 1: Use &&
function getAverage(marks) {
  // let sum = 0;
  // let average;
  // for (let i = 0; i < marks.length; i++) {
  //   sum += marks[i];
  // }
  // average = sum / marks.length;
  // return Math.floor(average);

  return Math.floor(marks.reduce((acc, num) => acc + num, 0) / marks.length);
}

// Test Cases:
console.log(getAverage([2, 3, 8, 7]));

// Solution 2: Use

// Test Cases:
