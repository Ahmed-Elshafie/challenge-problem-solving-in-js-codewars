// ================================
// Title: [Your order, please]
// ================================
// URL: [https://www.codewars.com/kata/55c45be3b2079eccff00010f]
// ================================
// Language: JavaScript
// ================================
// Level: [6kyu]
// ================================
// Description:
// Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string.
// The words in the input String will only contain valid consecutive numbers.
// Example
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// ================================

// Steps to Solve:

// Check On The String And Return Empty String If Not Exist
// Convert The String To Array
// Use The Sort Method With The New Array
// Extract The Number From The String
// Sort
// Convert The Result To String

// ------------------------

// Solution 1: Using RegEx, split(), sort(), match(), join()
function order(words) {
  if (!words) return '';
  const splittedArr = words.split(' ');
  splittedArr.sort((a, b) => a.match(/\d/)[0] - b.match(/\d/)[0]);
  return splittedArr.join(' ');
}

// Test Cases:
console.log(order('4of Fo1r pe6ople g3ood th5e the2')); // Fo1r the2 g3ood 4of th5e pe6ople
