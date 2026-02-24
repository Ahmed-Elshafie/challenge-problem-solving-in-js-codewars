// ================================
// Title: [Moving Zeros To The End]
// ================================
// URL: [https://www.codewars.com/kata/52597aa56021e91c93000cb0]
// ================================
// Language: JavaScript
// ================================
// Level: [5kyu]
// ================================
// Description:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// ================================

// Steps to Solve:

// Filter The Array To Remove 0 Values
// Find The Length Of The 0 Values
// Fill The Filtered Array With 0 Values
// Return The Final Array

// ------------------------

// Solution 1: Using sort, filter, for loop, if

function moveZeros(arr) {
  let filteredArray = arr.filter((item) => item !== 0);
  let zeroLength = arr.length - filteredArray.length;
  filteredArray = filteredArray.concat(Array(zeroLength).fill(0));
  return filteredArray;
}
// Test Cases:
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])); // [false,1,1,2,1,3,"a",0,0];
