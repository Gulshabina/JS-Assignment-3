
6.1
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(5, 3);
console.log(result); 

let num = 10;
let message = "Hello, World!";


function addNumbers(a, b) {
    return a + b;
}


let num1 = 5;
let num2 = 3

let = addNumbers(num1, num2);


console.log("8", num1, "and", num2, "is", result);


let num3 = 10;
let num4 = 7;

let result2 = addNumbers(num3,num4)
console.log("17", num3, "and", num4, "is", result2);


6.2
 Words =["beautiful",
     "charming", 
    "dazzling", 
    "elegant", 
    "fascinating", 
    "gorgeous", 
    "harmonious", 
    "majestic", 
    "picturesque", 
    "serene"
 ]

2

 function greetUser() {
    
    let userName = prompt("Please enter your name:");

    if (userName !== null && userName !== "") {
        alert("Hello, " + userName + "! Welcome to our website.");
    } else {
        alert("Hello there! Welcome to our website.");
    }
}

greetUser();

3
function getRandomElement(arr) {
    
    let randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex];
}


let array = ["apple", "banana", "cherry", "date", "elderberry"];
let randomElement = getRandomElement(myArray);

console.log("Random element:", randomElement);

4
function getRandomElementAndPromptValue(arr) {
    
    let userInput = prompt("Please enter something:")
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomElement = arr[randomIndex]
   console.log("User input:", userInput);
    console.log("Randomly selected array value:", randomElement);
    return randomElement;
}
let myArray = ["apple", "banana", "cherry", "date", "elderberry"];
let selectedElement = getRandomElementAndPromptValue(myArray);



6.4
function basicCalculator(num1, num2, operation = 'add') {
    let result;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else {
        console.log("Invalid operation specified. Defaulting to 'add'.");
        result = num1 + num2; 
    }

    return result;
}


console.log("Result (add):", basicCalculator(5, 3, 'add'));
console.log("Result (subtract):", basicCalculator(10, 4, 'subtract')); 
console.log("Result (default add):", basicCalculator(7, 2)); 
console.log("Result (invalid operation):", basicCalculator(5, 2, 'multiply')); 

6.3
1
 new 1, 10
 new 2,5

 2
 let operator = '+';

console.log("Operator:", operator);

3
function performOperation(num1, num2, operator) {
    let result;

    if (operator === '+' || operator === undefined) {
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
    } else if (operator === '-') {
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
    } else {
        console.log(`Invalid operator '${operator}'. Defaulting to addition.`);
        result = num1 + num2; 
        console.log(`${num1} + ${num2} = ${result}`);
    }

    return result;
}


performOperation(10, 5, '+'); 
performOperation(10, 5, '-'); 
performOperation(10, 5); 
performOperation(10, 5, '*'); 


4
function performOperation(num1, num2, operator) {
    let result;

    if (operator === '+' || operator === undefined) {
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
    } else if (operator === '-') {
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
    } else {
        console.log(`Invalid operator '${operator}'. Defaulting to addition.`);
        result = num1 + num2; 
        console.log(`${num1} + ${num2} = ${result}`);
    }

    return result;
}

let number1 = 15;
let number2 = 8;
let operat = '-';

console.log("Result:");
console.log(performOperation(number1, number2, operator)); 

5
function performOperation(num1, num2, operator) {
    let result;

    if (operator === '+' || operator === undefined) {
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
    } else if (operator === '-') {
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
    } else {
        console.log(`Invalid operator '${operator}'. Defaulting to addition.`);
        result = num1 + num2; 
        console.log(`${num1} + ${num2} = ${result}`);
    }

    return result;
}


let numb1 = 15;
let numb2 = 8;
let optor = '-';

console.log("Result:");
console.log(performOperation(number1, number2, operator)); 

operator = '+';
console.log("\nUpdated Result:");
console.log(performOperation(number1, number2, operator)); 

