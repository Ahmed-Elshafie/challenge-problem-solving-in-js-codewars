// ================================
// Title: [Don't give me five!]
// ================================
// URL: [https://www.codewars.com/kata/5813d19765d81c592200001a]
// ================================
// Language: JavaScript
// ================================
// Level: [7kyu]
// ================================
// Description:
// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it.
// The start and the end number are both inclusive!
// Examples:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// ================================

// Steps to Solve:

// Create An Empty Var
// Loop Through The Start And And
// Check If The Current Number Contains "5"
// Count All Except "5" Numbers

// ------------------------

// Solution 1: Using For, String()
function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!String(i).includes('5')) {
      count++;
    }
  }
  return count;
}

// Test Cases:
console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
