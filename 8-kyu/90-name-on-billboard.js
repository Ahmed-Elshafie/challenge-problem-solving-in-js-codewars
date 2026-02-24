// ================================
// Title: [Name on billboard]
// ================================
// URL: [https://www.codewars.com/kata/570e8ec4127ad143660001fd]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (always 2 for Java).
// You can not use multiplier "*" operator.
// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).

// ================================

// Steps to Solve:
// Decalre Empty Var = 0
// Loop Through The Given Name (String)
// Each Loop i Will Add The Price To The Empty Var
// Return The Result

// ------------------------

// Solution 1: Use For Loop
function billboard(name, price = 30) {
  let result = 0;
  for (let i = 0; i < name.length; i++) {
    result += price;
  }
  return result;
}

// Test Cases:
console.log(billboard('Ahmed'));

// Solution 2: Use split, map
function billboard(name, price = 30) {
  let finalResult = 0;
  let result = name.split('').map((char) => (finalResult += price));
  return result[name.length - 1];
}

// Test Cases:
console.log(billboard('Ahmed'));
