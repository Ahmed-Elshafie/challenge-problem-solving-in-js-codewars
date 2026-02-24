// ================================
// Title: [Who likes it?]
// ================================
// URL: [https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript]
// ================================
// Language: JavaScript
// ================================
// Level: [6kyu]
// ================================
// Description:
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"

// ================================

// Steps to Solve:

// Declare On Array Length
// Check On The Array Length
// Return The Message
// ------------------------

// Solution 1: Using Ternary Operator
function likes(names) {
  const none = 'no one likes this';
  const single = 'likes this';
  const multi = 'like this';
  const other = 'others like this';
  const len = names.length;
  return len === 1
    ? `${names[0]} ${single}`
    : len > 1 && len < 3
      ? `${names[0]} and ${names[1]} ${multi}`
      : len > 2 && len < 4
        ? `${names[0]}, ${names[1]} and ${names[2]} ${multi}`
        : len > 3
          ? `${names[0]}, ${names[1]} and ${len - 2} ${other}`
          : `${none}`;
}

// Test Cases:
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex', 'o', 'mk']));
