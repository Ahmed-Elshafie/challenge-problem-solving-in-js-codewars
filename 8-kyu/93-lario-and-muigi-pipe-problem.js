// ================================
// Title: [Lario and Muigi Pipe Problem]
// ================================
// URL: [https://www.codewars.com/kata/56b29582461215098d00000f]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
// The pipes are correct when each pipe after the first is 1 more than the previous one.
// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8.

// ================================

// Steps to Solve:
// Create A New Empty Array
// Loop Through The Given Array
// Add Numbers To The New Array

// ------------------------

// Solution 1: Use For Loop
function pipeFix(numbers) {
  let newArr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    newArr.push(i);
  }
  return newArr;
}
// Test Cases:
console.log(pipeFix([1, 3, 5, 7, 9]));
console.log(pipeFix([-1, 4]));
