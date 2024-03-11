var studentNamesLiteral = [];

var studentNamesObject = new Array();

var stringsArray = ["apple", "banana", "orange"];

var numbersArray = [1, 2, 3, 4, 5];

var booleanArray = [true, false, true, true];

var mixedArray = ["apple", 2, true, "banana", false, 3];

// Declare and initialize an array with education qualifications
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Displaying the qualifications in the browser
document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");

// Store student names in an array
var studentNames = ["Alice", "Bob", "Charlie"];

// Store scores of students in an array
var scores = [430, 380, 450];

// Calculate percentage for each student
var totalMarks = 500;
var percentages = [];

for (var i = 0; i < scores.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    percentages.push(percentage.toFixed(2)); // Round to 2 decimal places
}

// Displaying the scores and percentages of students
document.write("<h2>Student Scores and Percentages:</h2>");
document.write("<ul>");
for (var j = 0; j < studentNames.length; j++) {
    document.write("<li>" + studentNames[j] + " scored " + scores[j] + " out of " + totalMarks + " marks, with a percentage of " + percentages[j] + "%</li>");
}
document.write("</ul>");


// Store student scores in an array
var studentScores = [85, 72, 93, 65, 78];

// Sort the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});

// Display the sorted array
document.write("<h2>Sorted Student Scores (Ascending Order):</h2>");
document.write(studentScores.join(", "));

// Initialize an array with city names
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Initialize an empty array to store selected cities
var selectedCities = [];

// Copy 3 elements from cities array to selectedCities array
selectedCities = cities.slice(0, 3);

// Display the selected cities array
document.write("<h2>Selected Cities:</h2>");
document.write(selectedCities.join(", "));

// Initialize the array
var arr = ["This", "is", "my", "cat"];

// Create a single string from the array using the join method
var singleString = arr.join(" ");

// Display the single string
document.write(`<h2>array join is </h2> "${singleString}"`);

// Create a new empty array
var fifoArray = [];

// Add values to the array
fifoArray.push("value1");
fifoArray.push("value2");
fifoArray.push("value3");

// Access values in FIFO order
var firstValue = fifoArray.shift(); // Removes and returns "value1"
var secondValue = fifoArray.shift(); // Removes and returns "value2"
var thirdValue = fifoArray.shift(); // Removes and returns "value3"

// Display the values
document.write(firstValue); // "value1"
document.write(secondValue); // "value2"
document.write(thirdValue); // "value3"


