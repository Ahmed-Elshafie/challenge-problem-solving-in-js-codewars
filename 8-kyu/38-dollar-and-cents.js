// ================================
// Title: [Dollars and Cents]
// ================================
// URL: [https://www.codewars.com/kata/55902c5eaa8069a5b4000083]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.
// 39.99 becomes $39.99
// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// ================================

// Steps to Solve:
// Loop Through The Array
// Check If The Current Element Index Larger Than The Previous by 1 ,Continue
// If Not Return That Element
//  Return Null If All The Number Are consecutive
// ------------------------

// Solution 1: Use if
function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}
// Test Cases:
console.log(formatMoney(5.567));

// Example:
// 5.5589 is rounded 5.56
// -3.3424 is rounded -3.34
