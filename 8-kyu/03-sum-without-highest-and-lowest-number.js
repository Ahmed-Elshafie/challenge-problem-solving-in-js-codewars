// ================================
// Title: [Sum without highest and lowest number]
// ================================
// URL: [https://www.codewars.com/kata/576b93db1129fcf2200001e6]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
//  Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// ================================

// Steps to Solve:
// Check if Empty Value return 0
// Find the Highest Number
// Find the Lowest Number
// Filter The Array
// Sum all Number in the Array

// ------------------------

// Solution 1: Using filter() reduce()
function sumWithoutTheHighestAndLowestNumber(arr) {
  if (arr === null) return 0;
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
  let filteredArray = arr.filter((num) => num !== maxValue && num !== minValue);
  let newArray = filteredArray.reduce((acc, curr) => acc + curr, 0);
  return newArray;
}

// // Test Cases:
console.log(sumWithoutTheHighestAndLowestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// ------------------------

// Solution 2: Using Filter() Reduce()

function sumWithoutTheHighestAndLowestNumber(arr) {
  if (arr === null) return 0;
  return arr
    .filter((num) => num !== Math.max(...arr) && num !== Math.min(...arr))
    .reduce((acc, curr) => acc + curr, 0);
}

// // Test Cases:
console.log(sumWithoutTheHighestAndLowestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
