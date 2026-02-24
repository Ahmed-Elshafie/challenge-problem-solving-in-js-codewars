// ================================
// Title: [Filter out the geese]
// ================================
// URL: [https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write a function that takes a list of strings as an argument and returns a filtered list
// containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use filter, includes
function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  let uniqueResult = birds.filter((bird) => {
    return !geese.includes(bird);
  });
  return uniqueResult;
}
// Test Cases:

console.log(
  gooseFilter([
    'Mallard',
    'Hook Bill',
    'African',
    'Crested',
    'Pilgrim',
    'Toulouse',
    'Blue Swedish',
  ]),
);

//   ['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish'],
