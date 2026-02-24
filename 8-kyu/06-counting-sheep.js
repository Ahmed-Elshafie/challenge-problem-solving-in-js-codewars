// ================================
// Title: [Counting sheep...]
// ================================
// URL: [https://www.codewars.com/kata/54edbc7200b811e956000556]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// ================================

// Steps to Solve:
// initValue = 0
// Loop Through The Array
// Check If The Sheep === True , Increase The initValue + 1
// Reverse The Array

// ------------------------

// Solution 1: Using map()

function countSheeps(arrayOfSheeps) {
  let count = 0;
  arrayOfSheeps.map((num) => {
    if (num === true) count++;
  });
  return count;
}

// Test Cases:
console.log(countSheeps([true, true, true, true]));
