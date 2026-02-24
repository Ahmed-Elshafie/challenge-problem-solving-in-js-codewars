// ================================
// Title: [Calculate BMI]
// ================================
// URL: [https://www.codewars.com/kata/57a429e253ba3381850000fb]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// ================================

// Steps to Solve:

// ------------------------

// Solution 1: Use ternary operator
function bmi(weight, height) {
  const bmiResult = weight / Math.pow(height, 2);
  return bmiResult <= 18.5
    ? 'Underweight'
    : bmiResult <= 25.0
      ? 'Normal'
      : bmiResult <= 30.0
        ? 'Overweight'
        : 'Obese';
}

// Test Cases:
console.log(bmi(105, 182));
