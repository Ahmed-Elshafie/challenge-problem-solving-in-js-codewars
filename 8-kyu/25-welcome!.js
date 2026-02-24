// ================================
// Title: [Welcome!]
// ================================
// URL: [https://www.codewars.com/kata/577ff15ad648a14b780000e7/discuss]
// ================================
// Language: JavaScript
// ================================
// Level: [8kyu]
// ================================
// Description:
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
// The Task:
// Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

// ================================

// Steps to Solve:
// Create The Object For The Database
// Check If The Language Exist In The Database
// If Exist, Return The Welcome With The Language
// If Not Exist, Return The Default Which Is English

// ------------------------

// Solution 1: Use Unary plus (+)
function greet(language) {
  let languages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  };
  if (languages.hasOwnProperty(language)) {
    return languages[language];
  } else {
    return languages['english'];
  }
}
// Test Cases:
console.log(greet('french'));
