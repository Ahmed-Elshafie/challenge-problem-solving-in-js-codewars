// ================================
// Title: [Area or Perimeter]
// ================================
// URL: [https://www.codewars.com/kata/5ab6538b379d20ad880000ab]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Example(Input1, Input2 --> Output):
// 6, 10 --> 32
// 3, 3 --> 9

// ================================

// Steps to Solve:
// Check The Type Of Polygon

// ------------------------

// Solution 1: Use ternary operator
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : (l + w) * 2;
};

// Test Cases:
console.log(areaOrPerimeter(6, 10)); // 32
console.log(areaOrPerimeter(3, 3)); //9
