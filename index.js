// 1.Creation of variables to store my name, age, and nationality and then using template literals to create a sentence that introduces myself.
const name = 'Dauda Tijani';
const age = 60;
const nationality = 'Nigerian';
// Introducing myself with the declared variables using template literals
const introductorySentence = `My name is ${name}.\nI am ${age} years old.\nI am a ${nationality}`;
// Log the introductory sentence to the console
console.log(introductorySentence);

// 2.Changing my favorite quote to both uppercase and lowercase
const favoriteQuote =
  'The only limit to our realization of tomorrow is our doubts of today.';
// Convert to uppercase and lowercase
const upperCaseQuote = favoriteQuote.toUpperCase();
// Convert to lowercase
const lowerCaseQuote = favoriteQuote.toLowerCase();
// Log the quote in both uppercase and lowercase
console.log(`Quote in Uppercase: ${upperCaseQuote}`);
console.log(`Quote un Lowercase: ${lowerCaseQuote}`);

// 3.A word rearranged in reverse order, then log the reversed word.
const word = 'JavaScript';
// Reverse the word using split, reverse, and join methods
const reversedWord = word.split('').reverse().join('');
// Log both the original and the reversed words
console.log(`Original word: ${word}`);
console.log(`Reversed word: ${reversedWord}`);

// 4.Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.
const item1Price = 10.99;
const item2Price = 15.49;
const item3Price = 7.99;
// Calculate the total price
const totalPrice = item1Price + item2Price + item3Price;
// Display the total price with a message
console.log(`The total price of the items is: $${totalPrice.toFixed(2)}`);

// 5.Find the average of 5 test scores stored in variables. Display the average with a message.
const testScore1 = 85;
const testScore2 = 90;
const testScore3 = 78;
const testScore4 = 88;
const testScore5 = 92;
// Calculate the average score
const averageScore =
  (testScore1 + testScore2 + testScore3 + testScore4 + testScore5) / 5;
// Display the average score with a message
console.log(`The average score is: ${averageScore.toFixed(2)}`);

// 6.Create an array of your 5 favorite foods. Display the first and last items in the array.
const favoriteFoods = ['Rice', 'Yam', 'Bread', 'Porridge', 'Beans'];
const firstFood = favoriteFoods[0];
const lastFood = favoriteFoods[favoriteFoods.length - 1];
// Display the first item
console.log(`First favorite food: ${firstFood}`);
// Display the last item
console.log(`Last favorite food: ${lastFood}`);

// 7.Add two more food items to the favoriteFood list: one at the beginning and one at the end. Display the new list.
const newFood1 = 'Pasta';
const newFood2 = 'Shawarma';
// Add to the beginning
favoriteFoods.unshift(newFood1);
// Add to the end
favoriteFoods.push(newFood2);
// Display the updated list
console.log('Updated favorite foods list:', favoriteFoods);

// 8.Create an array of 10 jss One students named jssOne
const jssOne = [
  'John',
  'Jane',
  'Mary',
  'Peter',
  'Paul',
  'Ruth',
  'Mark',
  'Bilal',
  'Aminat',
  'Sadiq',
];

// 9.Create an array of 10 jss Two students named jssTwo
const jssTwo = [
  'Aisha',
  'Fatima',
  'Zainab',
  'Ibrahim',
  'Ali',
  'Hassan',
  'Aliyah',
  'Sarah',
  'David',
  'Emmanuel',
];

// 10.Create an array of 10 jss Three students named jssThree
const jssThree = [
  'Tunde',
  'Kehinde',
  'Abdul',
  'Ayo',
  'Funmi',
  'Tolu',
  'Chika',
  'Damilola',
  'Ola',
  'Sola',
];
