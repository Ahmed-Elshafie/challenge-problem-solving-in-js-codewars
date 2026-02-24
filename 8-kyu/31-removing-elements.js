// ================================
// Title: [Removing Elements]
// ================================
// URL: [https://www.codewars.com/kata/5769b3802ae6f8e4890009d2]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// ================================

// Steps to Solve:
// Create The New Array
// Loop Through The Current Array
// Check If The Element In The Second Position
// Remove That Element
// Return The New Array

// ------------------------

// Solution 1: Use For
// function removeEveryOther(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// // Test Cases:
// console.log(
//   removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep', 'Remove']),
// );

// Solution 2: Use filter()
function removeEveryOther(arr) {
  return arr.filter((item, i) => i % 2 === 0);
}

// Test Cases:
console.log(
  removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep', 'Remove']),
);
