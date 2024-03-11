console.log ("for addition")
console.log("num1")
var num1 = 10;
console.log(num1)
console.log("num2")
var num2 = 10;
console.log(num2)
console.log("result")
var result = num1 + num2;
console.log(result)

console.log ("for subtraction")
console.log("num1")
var num1 = 10;
console.log(num1)
console.log("num2")
var num2 = 10;
console.log(num2)
console.log("result")
var result = num1 - num2;
console.log(result)

console.log ("for division")
console.log("num1")
var num1 = 10;
console.log(num1)
console.log("num2")
var num2 = 10;
console.log(num2)
console.log("result")
var result = num1 / num2;
console.log(result)

console.log ("for multiplication")
console.log("num1")
var num1 = 10;
console.log(num1)
console.log("num2")
var num2 = 10;
console.log(num2)
console.log("result")
var result = num1 * num2;
console.log(result)

console.log("value intialize")
var num3 = 5
console.log(num3)
console.log("value after increament")
var num4 = ++num3
console.log(num4)
console.log("value after addition")
var num5 = num3 + 7
console.log(num5)
console.log("value decrement")
var dec = --num5
console.log(dec)
console.log("value after modulas")
var mod = dec % dec
console.log(mod)
document.write("<h2>price of 6 tickets </h2>" +  "<br>")
var ticket = 600
var tickets = ticket * 5
document.write("total cost to buy" + " " + ticket  + " "  + "tickets to a movie is" + " "  + tickets  + " " + "PKR" +"<br>"+"<br>")
document.write("<h2>table of  4 </h2> "+"<br>")
var tb = 4
var table = "";

for (var i = 1; i <= 10; ++i) {
    
    table += tb + " x " + i + " = " + (tb * i) + "<br>";
}
document.write(table +"<br>")
document.write("<h2>Fahrenheit  into Celsius and Celsius into Fahrenheit </h2> "+"<br>")
 
var oC = 32  
 var oF = (oC * 9 / 5) + 32
 document.write(oC  + " " + "oC to" + " "+ oF + "" + "oF" + "<br>" )
 var oF = 70 
 var oC = (oF - 32) * 5 / 9
 document.write(oF + " " + "oF to" + " " + oC + "" + "oC" )

  var priceItem1 = 10; 
  var priceItem2 = 20; 
  var quantityItem1 = 3; 
  var quantityItem2 = 2; 
  var shippingCharges = 5; 
  
  
  var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;


  document.write("<h2>Receipt</h2>");
  document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
  document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
  document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
  document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
  document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
  document.write("<h3>Total Cost: $" + totalCost + "</h3>");
   
   var totalMarks = 980;
   var obtainedMarks = 804;
   

   var percentage = (obtainedMarks / totalMarks) * 100;


   document.write("<h2>Result</h2>");
   document.write("<p>Total Marks: " + totalMarks + "</p>");
   document.write("<p>Marks Obtained: " + obtainedMarks + "</p>");
   document.write("<h3>Percentage Obtained: " + percentage.toFixed(2) + "%</h3>");

   var usDollars = 10;
var saudiRiyals = 25;


var usdToPkrRate = 104.80;
var sarToPkrRate = 28;


var totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

// Display the total in Pakistani Rupees
document.write("<h1>currency in PKR </h1>");
document.write("<p>Total in Pakistani Rupees: </p>" + totalPkr)


var number = 10;


document.write("Initial Number: " + number + "<br>");
document.write("Result after operations: " + ((number + 5) * 10 / 2));

 
  var currentYear = 2024

  
  var birthYear = 2005; 

  
  var age1 = currentYear - birthYear;
  var age2 = age1 - 1; 

 
  document.write("<h1>They are either </h1>" + age1 + " or " + age2 + " years old.");

   
    var radius = 5; 

    var circumference = 2 * Math.PI * radius;

    var area = Math.PI * radius * radius;

    // Output the results
    document.write("<h3>The circumference is " + circumference.toFixed(2) + "<br></h3>");
    document.write("The area is " + area.toFixed(2));

       // Store your favorite snack
       var favoriteSnack = "chocolate bars";

       // Store your current age
       var currentAge = 30; // Example current age, change it to your actual age

       // Store the maximum age
       var maxAge = 80; // Example maximum age, change it to your desired maximum age

       // Store the estimated amount per day
       var amountPerDay = 2; // Example amount per day, change it to your actual consumption

       // Calculate the total needed for the rest of your life
       var yearsRemaining = maxAge - currentAge;
       var totalNeeded = yearsRemaining * 365 * amountPerDay;

       // Output the result
       document.write("<h2>You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".</h2>");