// ================================
// Title: [The Feast of Many Beasts]
// ================================
// URL: [https://www.codewars.com/kata/5aa736a455f906981800360d]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// ================================

// Steps to Solve:
// Get the First And The Last Element
// Check If The Letters Are Equal
// ------------------------

// Solution 1: Use Unary Plus Operator, Reduce
function feast(beast, dish) {
  let bLetters = beast[0] + beast[beast.length - 1];
  let dLetters = dish[0] + dish[dish.length - 1];
  if (bLetters === dLetters) {
    return true;
  } else {
    return false;
  }
}

// Test Cases:
console.log(feast('chickadee', 'chocolate cake'));
