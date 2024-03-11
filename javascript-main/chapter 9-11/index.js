var city = prompt("enter city name")
if(city == "karachi"){
    document.write("<h2>welcome to the city 0f light :) </h2>")
}
else{
    document.write("<h3>change your city '='</h3> ")
}
var gender = prompt("Enter your gender");

if (gender.toLowerCase() === "male") {
    document.write("<h2>Good Morning Sir. :) </h2>");
} else if (gender.toLowerCase() === "female") {
    document.write("<h3>Good Morning Ma'am '='</h3>");
} else {
    document.write("masti nahi !");
}

var color = prompt("Enter the color of the road traffic signal (red, yellow, green):");

if (color.toLowerCase() === "red") {
    document.write(`<h2> red  : Must Stop</h2>`);
} else if (color.toLowerCase() === "yellow") {
    document.write("<h2>yellow : Ready to Move</h2>");
} else if (color.toLowerCase() === "green") {
    document.write("<h2>green : Move now</h2>");
} else {
    document.write("<h2>Invalid color!</h2>");
}
var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("You have enough fuel");
}


 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}





var b = 82;
if (++b === 83){
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

var percentage = +prompt("Enter percentage:"); 
if (percentage >= 90) {
    document.write("<b> A+ </b>");
} else if (percentage >= 80) {
    document.write("<b> A </b>");
} else if (percentage >= 70) {
    document.write("<b> B </b>");
} else if (percentage >= 60) {
    document.write("<b> C </b>");
} else if (percentage >= 50) {
    document.write("<b> D </b>");
} else {
    document.write("Fail");
}

document.write("<br>");

var grade = prompt("Enter grade:");

if (grade === "Fail") {
    document.write("Sorry, you failed.");
} else {
    document.write("Congratulations!");
}

document.write("<br>");

var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
var totalMarks = 300; // Adjusting the total marks based on your declaration

var obtainedMarks = subject1 + subject2 + subject3;
var calculatedPercentage = (obtainedMarks / totalMarks) * 100;

var calculatedGrade = computeGrade(calculatedPercentage);
var calculatedRemarks = computeRemarks(calculatedGrade);

document.write("<h2>Results:</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + obtainedMarks + "</p>");
document.write("<p>Percentage: " + calculatedPercentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + calculatedGrade + "</p>");
document.write("<p>Remarks: " + calculatedRemarks + "</p>");

// Function to compute grade based on percentage
function computeGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 50) {
        return "D";
    } else {
        return "Fail";
    }
}

// Function to compute remarks based on grade
function computeRemarks(grade) {
    if (grade === "Fail") {
        return "Sorry, you failed.";
    } else {
        return "Congratulations!";
    }
}

// Store the secret number
var secretNumber = 10 // Generates a random number between 1 and 10


var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, incorrect guess. The correct answer was " + secretNumber);
}

// Prompt user to enter a number
var number =+prompt("Enter a number:");

// Check if the number is divisible by 3
if (number % 3 === 0) {
    document.write(number + " is divisible by 3.");
    // or you can use alert("The number is divisible by 3."); to show message to the user
} else {
    document.write(number + " is not divisible by 3.");
    // or you can use alert("The number is not divisible by 3."); to show message to the user
}


// Prompt user to enter a number
var number = +prompt("Enter a number to see what if its dividable 3:");

// Check if the number is even or odd
if (number % 2 === 0) {
    document.write(number + " is an even number.");
    // or you can use alert("The number is an even number."); to show message to the user
} else {
    document.write(number + " is an odd number.");
    // or you can use alert("The number is an odd number."); to show message to the user
}

// Prompt user to enter the temperature
var temperature = +prompt("Enter the temperature:");

// Check the temperature and display a message
if (temperature > 40) {
   document.write("It is too hot outside.");
    // or you can use alert("It is too hot outside."); to show message to the user
} else if (temperature > 30) {
   document.write("The Weather today is Normal.");
    // or you can use alert("The Weather today is Normal."); to show message to the user
} else if (temperature > 20) {
   document.write("Today’s Weather is cool.");
    // or you can use alert("Today’s Weather is cool."); to show message to the user
} else if (temperature > 10) {
   document.write("OMG! Today’s weather is so Cool.");
    // or you can use alert("OMG! Today’s weather is so Cool."); to show message to the user
} else {
   document.write("Temperature is too low to determine the weather.<br>");
    // or you can use alert("Temperature is too low to determine the weather."); to show message to the user
}

// Prompt user to enter the first number
var firstNumber = +prompt("Enter the first number:");

// Prompt user to enter the second number
var secondNumber = +prompt("Enter the second number:");

// Prompt user to enter the operation
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Variable to store the result
var result;

// Perform the operation based on the input
if (operation === "+") {
  document.write( result = firstNumber + secondNumber) 
} else if (operation === "-") {
   document.write(result = firstNumber - secondNumber) 
} else if (operation === "*") {
   document.write(result = firstNumber * secondNumber) 
} else if (operation === "/") {
    if (secondNumber !== 0) {
     document.write(result = firstNumber / secondNumber)
    } else {
       document.write( result = "Cannot divide by zero!")
    }
} else if (operation === "%") {
   document.write( result = firstNumber % secondNumber)
} else {
   document.write(result = "Invalid operation!") ;
}

// Display the result
document.write("Result:", result);
// or you can use alert("Result: " + result); to show message to the user
