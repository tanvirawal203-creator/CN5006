console.log("This is my first code")
console.log("you're welcome")
const prompt = require('prompt-sync')();
console.log("starting") 
const name = prompt('Enter your name: '); 
console.log("Hello, "+name); 
const number = parseInt(prompt("Enter a number: ")); 
 
// it will check if number is greater than 0 
if (number > 0) { 
    console.log("The number you entered is positive"); 
} 
 
// it will check if number is 0 
else if (number == 0) { 
  console.log("The number you entered is zero"); 
} 
 
// check if number is less than 0 
else { 
     console.log("The number you entered is negative"); 
} 