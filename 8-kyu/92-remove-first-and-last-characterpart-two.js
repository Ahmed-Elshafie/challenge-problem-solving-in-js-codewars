// ================================
// Title: [Remove First and Last Character Part Two]
// ================================
// URL: [https://www.codewars.com/kata/570597e258b58f6edc00230d]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// This is a spin off of my first kata.
// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items
// would cause the resulting string to be empty, return an empty value
// (represented as a generic value NULL in the examples below).
// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ================================

// Steps to Solve:
// check On The Coming String To Make Sure That It Is More Than More Equal
// Split The String Into The Array
// Loop The Through The Array To Remove The First And The Last Element
// Join The Array Into String Space Sperated

// ------------------------

// Solution 1: Use For Loop,split, Or ||
function array(string) {
  let splitted = string.split(',');
  if (!splitted || splitted.length < 3) return null;
  let newArr = [];
  for (let i = 1; i < splitted.length - 1; i++) {
    newArr.push(splitted[i]);
  }
  return newArr.join(' ');
}
// Test Cases:
console.log(array('1,2,3,4'));
