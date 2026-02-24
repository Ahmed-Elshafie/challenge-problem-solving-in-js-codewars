// ================================
// Title: [Volume of a Cuboid]
// ================================
// URL: [https://www.codewars.com/kata/58261acb22be6e2ed800003a]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.
// Write a function to help Bob with this calculation.

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use Object
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
// Test Cases:
console.log(Kata.getVolumeOfCuboid(5, 4, 3));
