// ================================
// Title: [How good are you really?]
// ================================
// URL: [https://www.codewars.com/kata/5601409514fc93442500010b]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!
// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use reduce
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints >
    classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length
    ? true
    : false;
}

// Test Cases:
console.log(betterThanAverage([2, 3], 5));
