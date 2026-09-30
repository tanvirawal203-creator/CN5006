const prompt = require('prompt-sync')(); 
console.log("starting the code") 
const number1 = parseInt(prompt("Enter a number1: ")); 
const number2 = parseInt(prompt("Enter a number2: ")); 
const choice=prompt("Enter your choice (+,_,*,/)");
if (choice == '+') { 
    const add=number1+number2;
    console.log("Addition is "+add); 
} 
else if (choice == '-') { 
  const sub=number1-number2;
    console.log("Substraction is "+sub);  
} 
else if (choice == '*') { 
  const mul=number1*number2;
    console.log("Multiplication is "+mul);  
}
else if (choice == '/') { 
  const div=number1/number2;
    console.log("Division is "+div);  
} 
else { 
     console.log("The choice is invalid"); 
} 