1
let isMonday = true;

console.log("Is today Monday?", isMonday);

3
let Monday = true;

if (isMonday === true) {
    console.log("Today is Monday. It's the start of the week!");
} else {
    console.log("Today is not Monday.");
}

4
let Mondayis = true;

if (isMonday === true) {
    console.log("Today is Monday. It's the start of the week!");
} else {
    console.log("Today is not Monday.");
}

if (!isMonday) {
    console.log("Today is not Monday (using negation).");
}

5
let Mndayis = true; 

if (isMonday === true) {
    console.log("Today is Monday. It's the start of the week!");
} else {
    console.log("Today is not Monday.");
}

if (!isMonday) {
    console.log("Today is not Monday (using negation).");
}


isMonday = !isMonday; 

console.log("\nChanging variable to the opposite:");

if (isMonday === true) {
    console.log("Today is Monday. It's the start of the week!");
} else {
    console.log("Today is not Monday.");
}

if (!isMonday) {
    console.log("Today is not Monday (using negation).");
}

4.2
1
let ageStr = prompt("Please enter your age:");
let age = parseInt(ageStr); 

2

let ageInput = prompt("Please enter your age:");
let aage = parseFloat(ageInput); 
if (isNaN(age)) {
    console.log("Invalid age entered. Please enter a valid number.");
} else {
    console.log("User's age:", age);
}

3

let aggeInput = prompt("Please enter your age:");
let agge = parseFloat(ageInput); 
let message;


if (isNaN(age)) {
    message = "Invalid age entered. Please enter a valid number.";
} else 
    message = "User's age: " + a
console.log(message)

4
 
let agetInput = prompt("Please enter your age:");


let aget = parseInt(ageInput); 


let messag;
if (isNaN(age)) {
    message = "Invalid age entered. Please enter a valid number.";
} else {
    if (age >= 21) {
        message = "You are allowed entry to the venue and can purchase alcohol.";
    } else {
        message = "You are not allowed entry to the venue and cannot purchase alcohol.";
    }
}
console.log(message);

5
let ageyInput = prompt("Please enter your age:");


let yage = parseInt(ageInput); 


let  ymessage;

if (isNaN(age)) {
    message = "Invalid age entered. Please enter a valid number.";
} else if (age >= 19) {
    message = "You are allowed entry to the venue, but cannot purchase alcohol.";
} else {
    message = "You are not allowed entry to the venue.";
}
console.log(message);

4.5
1
let prize = prompt("Please enter a number between 0 and 10:");
prize = Number(prize);
if (isNaN(prize) || prize < 0 || prize > 10) {
    alert("Invalid input. Please enter a number between 0 and 10.");
} else {
    alert("You have set the prize to: " + prize);
}

2

let userInput = prompt("Please enter a number between 0 and 10:");
let prizze = parseFloat(userInput);
if (isNaN(prize) || prize < 0 || prize > 10) {
    alert("Invalid input. Please enter a number between 0 and 10.");
} else {
    alert("You have set the prize to: " + prize);
}

3
let userlInput = prompt("Please enter a number between 0 and 10:");

let prrize = +userInput;
let outputMessage = "My Selection: ";

if (isNaN(prize) || prize < 0 || prize > 10) {
    alert("Invalid input. Please enter a number between 0 and 10.");
} else {
   
    outputMessage += prize;
    alert(outputMessage);
}

4

let userhInput = prompt("Please enter a number between 0 and 10:");

let pprrize = +userInput;

let outputMesage = "My Selection: ";


if (isNaN(prize) || prize < 0 || prize > 10) {
    alert("Invalid input. Please enter a number between 0 and 10.");
} else 
    
    // switch (prize)[ ]
            0  
            outputMessage += "A handshake!";
           
           1
            outputMessage += "A gold medal!";
            
          2
            outputMessage += "A trip to the beach!";
            
           3
            outputMessage += "A basket of chocolates!";
           
           4
            outputMessage += "A cozy blanket!";
          
            5
            outputMessage += "A fancy dinner!";
           
            5
            // Prompt the user to enter a number between 0 and 10
let usrInput = prompt("Please enter a number between 0 and 10:");

// Convert the user input to a number using the unary plus operator (+)
let priz = +userInput;

// Variable for output message
let outptMesage = "My Selection: ";

// Variable to accumulate prizes
let combinedPrizes = "";

// Check if the input is a number between 0 and 10
if (isNaN(prize) || prize < 0 || prize > 10) {
    alert("Invalid input. Please enter a number between 0 and 10.");
} else {
    // Use switch statement to determine prize based on user input
    switch (prize) {
        case 0:
            combinedPrizes += "A handshake, ";
            break;
        case 1:
            combinedPrizes += "A gold medal, ";
            break;
        case 2:
            combinedPrizes += "A trip to the beach, ";
            break;
        case 3:
            combinedPrizes += "A basket of chocolates, ";
            break;
        case 4:
            combinedPrizes += "A cozy blanket, ";
            break;
        case 5:
            combinedPrizes += "A fancy dinner, ";
            break;
        case 6:
            combinedPrizes += "A spa day, ";
            break;
        case 7:
            combinedPrizes += "A movie night, ";
            break;
        case 8:
            combinedPrizes += "A concert ticket, ";
            break;
        case 9:
            combinedPrizes += "A shopping spree, ";
            break;
        case 10:
            combinedPrizes += "A weekend getaway, ";
            break;
        default:
            combinedPrizes += "No prize for this selection, ";
            break;
    }

    combinedPrizes = combinedPrizes.slice(0, -2);
    outputMessage += combinedPrizes;
    alert(outputMessage);
}

      
6

let userInputt = prompt("Please enter a number between 0 and 10:");


let priize = +userInput;


let outputtMessage = "My Selection: ";


let selectedPrizes = [];


if (isNaN(prize) || prize < 0 || prize > 10) {
    alert("Invalid input. Please enter a number between 0 and 10.");
} else {
   
   switch (prize) {
    case 0:
        selectedPrizes.push("A handshake");
        break;
    case 1:
        selectedPrizes.push("A gold medal");
        break;
    case 2:
        selectedPrizes.push("A trip to the beach");
        break;
    case 3:
        selectedPrizes.push("A basket of chocolates");
        break;
    case 4:
        selectedPrizes.push("A cozy blanket");
        break;
    case 5:
        selectedPrizes.push("A fancy dinner");
        break;
    case 6:
        selectedPrizes.push("A spa day");
        break;
    case 7:
        selectedPrizes.push("A movie night");
        break;
    case 8:
        selectedPrizes.push("A concert ticket");
        break;
    case 9:
        selectedPrizes.push("A shopping spree");
        break;
    case 10:
        selectedPrizes.push("A weekend getaway");
        break;
    default:
        selectedPrizes.push("No prize for this selection");
        break;
}

let combinedPrizes = selectedPrizes.join(", ");
outputMessage += combinedPrizes;
alert(outputMessage);
}
   