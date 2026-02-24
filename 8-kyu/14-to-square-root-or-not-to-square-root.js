// ================================
// Title: [To square(root) or not to square(root)]
// ================================
// URL: [https://www.codewars.com/kata/57f6ad55cca6e045d2000627]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
// ================================

// Steps to Solve:
// Loop Throught The  Array
// Check If The Number Has an Integer Square Root Or Not.
// If True Take The Root , If False Square The Number
// Return The New Array
// ------------------------

// Solution 1: Use For Loop
function squareOrSquareRoot(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.sqrt(array[i]))) {
      newArray.push(Math.sqrt(array[i]));
    } else {
      newArray.push(array[i] * array[i]);
    }
  }
  return newArray;
}

// Test Cases:
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

// ------------------------

// Solution 2: Use ternary operator
function squareOrSquareRoot(array) {
  return array.map((number) =>
    Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number,
  );
}

// Test Cases:
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
