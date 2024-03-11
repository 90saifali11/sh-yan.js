var inPut = prompt("Enter something you want to write");

if (!isNaN(inPut)) {
    document.write(inPut + " is a number<br>");
} else if (inPut === inPut.toUpperCase()) {
    document.write(inPut + " is an uppercase letter<br>");
} else if (inPut === inPut.toLowerCase()) {
    document.write(inPut + " is a lowercase letter<br>");
} else if (typeof inPut === 'string') {
    document.write(inPut + " is a string<br>");
} else {
    document.write(`Invalid input<br>`);
}

var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");

if (num1 > num2) {
    document.write("The first number, " + num1 + ", is greater.<br>");
} else if (num2 > num1) {
    document.write("The second number, " + num2 + ", is greater.<br>");
} else {
    document.write("Both numbers are equal.<br>");
}

// Taking input from the user
var number = parseFloat(prompt("Enter a number:"));

// Checking if the number is positive, negative, or zero
if (number > 0) {
    document.write(number + " is a positive number.");
} else if (number < 0) {
    document.write(number + " is a negative number.");
} else {
    document.write("The number is zero.");
}

function isVowel(char) {
    // Convert the character to lowercase to handle both uppercase and lowercase vowels
    char = char.toLowerCase();

    // Check if the character is a vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}

// Taking input from the user
var inputChar = prompt("Enter a character:");

// Check if the input character is a vowel
var result = isVowel(inputChar);

// Displaying the result
if (result) {
    document.write(inputChar + " is a vowel.");
} else {
    document.write(inputChar + " is not a vowel.");
}


// Store correct password in a variable
var correctPassword =prompt ("password123");

// Ask user to enter their password
var userPassword = prompt(`Enter ${correctPassword} password:`);

// Validate the two passwords
if (!userPassword) {
    // Check if user has entered a password
    document.write("Please enter your password.");
} else if (userPassword === correctPassword) {
    // Check if both passwords are the same
    document.write("Correct! The password you entered matches the original password.");
} else {
    // Incorrect password
    document.write("Incorrect password.");
}


// Taking input from the user
var time = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):"));

// Checking the time and converting it into 12-hour clock format
if (time >= 0 && time <= 1200) {
    document.write("The time is " + time + " = " + time + "am");
} else if (time > 1200 && time < 2400) {
    var pmTime = time - 1200;
    document.write("The time is " + time + " = " + pmTime + "pm");
} else {
    document.write("Invalid time.");
}
