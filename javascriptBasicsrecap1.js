//* Assignment 1: Logging to the Console

//! log into the console: Hello world!
console.log("Hello World!")

//* Assignment 2: Variables
// Let defines a variable that can be changed later.
let x = 10;

// Const defines a variable that cannot be changed later.
const y = 5;

/* Creating a variable to shorten code The 2 variables above.
Output should be: "Resultatet er: 15" (hvor 15 er summen av variablene) */

//! Write code here
let result = x + y 
console.log("Resultatet er: " + result)

//* Assignment 3:
// Use double operators to solve the parts below:

// Incrementing a number by 1.

//! Write code here
let number = 1
number++;
console.log(number)

// Decrementing a number by 1.

//! Write code here
let number2 = 2
number2--;
console.log(number2)

// Multiplying a number by itself.

//! Write code here
let number3 = 5
number3 *= number3;
console.log(number3)


// Dividing a number by itself.

//! Write code here
let number4 = 5
number4 /= number4
console.log(number4)

//* Assignment 4:
/* Make an if else statement that returns a random string */

//! Write code here

function getRandomString() {
    var randomNumber = Math.random();
  
    if (randomNumber < 0.5) {
      return "This is the first random string";
    } else {
      return "This is the second random string";
    }
  }
  
  var randomString = getRandomString();
  console.log(randomString);

//* Assignment 5:
/* Make a function that uses a parameter to check if a number is odd or even */

//! Write code here
function checkOddOrEven(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  var resultat = checkOddOrEven(7);
  console.log(resultat);
  
  resultat = checkOddOrEven(10);
  console.log(resultat);

//* Assigment 6:
/* Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working. */

//! Write code here
const userMale = true;
const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle);

//* Assigment 8:
/*
Write a function that takes in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Good night (name received)" if the hour received is 0-6
"Good morning (name received)" if the hour received is 6-12
"Good day (name received)" if the hour received is 12-18
"Good evening (name received)" if the hour received is 18-24
"Invalid time" if the hour received is greater than 24

Use whichever function syntax you want.
Use template literal in your return: `This is a template literal ${variable}`

Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
Console log the function a few times to show that it's working. */

//! Write code here
function greetByHour(name, hour) {
  if (hour >= 0 && hour < 6) {
      return `Good night ${name}`;
  } else if (hour >= 6 && hour < 12) {
      return `Good morning ${name}`;
  } else if (hour >= 12 && hour < 18) {
      return `Good day ${name}`;
  } else if (hour >= 18 && hour <= 24) {
      return `Good evening ${name}`;
  } else {
      return "Invalid time";
  }
}

// Testing av forskjellige inputs
console.log(greetByHour("Gunnar", 19)); // Good evening Gunnar
console.log(greetByHour("Alice", 8));    // Good morning Alice
console.log(greetByHour("Bob", 15));      // Good day Bob
console.log(greetByHour("Charlie", 3));   // Good night Charlie
console.log(greetByHour("David", 25));    // Invalid time

//* Assignment 9:
/* Write a function that takes in 2 numbers as parameters.

In your function, check which of the numbers received is the largest,
then return the sum of the largest number divided by the smaller.

Use arrow function syntax.

Example: your function receives 13 and 24, it should return the sum of 24/13 */

//! Write code here
const calculateSumDividedBySmaller = (number1, number2) => {
  const largerNumber = Math.max(number1, number2);
  const smallerNumber = Math.min(number1, number2);

  return largerNumber / smallerNumber;
};

console.log(calculateSumDividedBySmaller(13, 24));
console.log(calculateSumDividedBySmaller(5, 10));
console.log(calculateSumDividedBySmaller(8, 8));

//* Assignment 10:
/* Make a function that uses Switch/Case or if/else,
Random Number Generator, Methods, and Arrays with Objects */

//! Write code here

function performRandomOperation() {

  const number1 = Math.floor(Math.random() * 10) + 1;
  const number2 = Math.floor(Math.random() * 10) + 1;


  const operations = [
      { operator: '+', operation: (a, b) => a + b },
      { operator: '-', operation: (a, b) => a - b },
      { operator: '*', operation: (a, b) => a * b },
      { operator: '/', operation: (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero') }
  ];

  const selectedOperation = operations[Math.floor(Math.random() * operations.length)];

  const result = selectedOperation.operation(number1, number2);

  console.log(`${number1} ${selectedOperation.operator} ${number2} = ${result}`);
}

performRandomOperation();


//* BAONUS assignment:
/*
EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make a function called coolMaker that takes in 1 parameter.

If the parameter received is a string:
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received is false,
return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

Use arrow function syntax.

Console log the function call with a few different datatypes to show that it's working
*/

//! Write code here