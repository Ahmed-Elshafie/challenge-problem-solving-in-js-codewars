// ================================
// Title: [Well of Ideas - Easy Version]
// ================================
// URL: [https://www.codewars.com/kata/57f222ce69e09c3630000212]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
// If there are one or two good ideas, return 'Publish!',
// if there are more than 2 return 'I smell a series!'.
// If there are no good ideas, as is often the case, return 'Fail!'.

// ================================

// Steps to Solve:
// Filter The Array To Get The New Filtered One
// Check The Length Of The New Array
// Return The Proper Message

// ------------------------

// Solution 1: Use ternary operator
function well(x) {
  const filteredArrayLength = x.filter((idea) => idea === 'good').length;
  if (filteredArrayLength === 0) {
    return 'Fail!';
  } else if (filteredArrayLength <= 2) {
    return 'Publish!';
  } else {
    return 'I smell a series!';
  }
}

// Test Cases:

console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(
  well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']),
);
