// ================================
// Title: [Transportation on vacation]
// ================================
// URL: [https://www.codewars.com/kata/568d0dd208ee69389d000016]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

// ================================

// Steps to Solve:
// Define The Price
// Check If The Days Less Than 3 Return The Price
// Check If The Days Less Are More 7 Return The Price - 50
// Else Return The Price - 20

// ------------------------

// Solution 1: Use if
function rentalCarCost(d) {
  let price = 40 * d;
  if (d < 3) return price;
  if (d >= 7) return price - 50;
  else {
    return price - 20;
  }
}
// Test Cases:
console.log(rentalCarCost(3));

// Solution 2: Use ternary operator
function rentalCarCost(d) {
  let price = 40 * d;

  return d < 3 ? price : d >= 7 ? price - 50 : price - 20;
}

// Test Cases:
console.log(rentalCarCost(3));
