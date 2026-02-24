// ================================
// Title: [Vowel Count]
// ================================
// URL: [https://www.codewars.com/kata/58925dcb71f43f30cd00005f]
// ================================
// Language: JavaScript
// ================================
// Level: [6kyu]
// ================================
// Description:
// Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.
// The time should be in HH:MM format.
// Examples:
// digits: 1, 9, 8, 3 => result: "19:38"
// digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)

// ================================

// Steps to Solve:

// Create An Array With The Digit
// Sorting The Array Descending
// Get The Length Of Numbers Greater Than 5
// Creat Function To Get The Max Number
// Create The Formula

// ------------------------

// Solution 1: Using sort, filter, for loop, if

function latestClock(a, b, c, d) {
  const sortedDigitArr = [a, b, c, d].sort((a, b) => b - a);
  const digitGreaterThan5 = sortedDigitArr.filter((digit) => digit > 5).length;
  const getMaxDigit = (maxDigit) => {
    for (let i = 0; i < sortedDigitArr.length; i++) {
      const currentDigit = sortedDigitArr[i];
      if (currentDigit <= maxDigit) {
        delete sortedDigitArr[i];
        return currentDigit;
      }
    }
  };
  const firstDigit = getMaxDigit(digitGreaterThan5 > 1 ? 1 : 2);
  const secondDigt = getMaxDigit(firstDigit === 2 ? 3 : 9);
  const thirdDigit = getMaxDigit(5);
  const fourthDigit = getMaxDigit(9);
  return `${firstDigit}${secondDigt}:${thirdDigit}${fourthDigit}`;
}
// Test Cases:
console.log(latestClock(1, 9, 8, 3)); // 19:38
console.log(latestClock(9, 1, 2, 5)); //21:59
console.log(latestClock(0, 0, 0, 0)); //00:00
