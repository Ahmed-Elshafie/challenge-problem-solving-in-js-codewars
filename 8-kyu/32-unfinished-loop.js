// ================================
// Title: [Unfinished Loop - Bug Fixing #1]
// ================================
// URL: [https://www.codewars.com/kata/55c28f7304e3eaebef0000da/discuss]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use &&

function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}

// Test Cases:
console.log(createArray(5));
