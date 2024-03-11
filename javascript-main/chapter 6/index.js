var name = "BILAL ATTARI AND USMAN"


document.write("<h2>Hello, " + name + "!</h2>");

   var number = 10;

  
   var result = (number * 2) + 5 - 3;


   document.write("<h2>Result</h2>");
   document.write("The result of the arithmetic operations is: " + result);

   var a = 2, b = 1;
   var result = --a - --b + ++b + b--;

   document.write("<p>Value of a: " + a + "</p>");
   document.write("<p>Value of b: " + b + "</p>");
   document.write("<p>Value of result: " + result + "</p>");
     
     // Prompt user for input
     var number = prompt("Enter a number:");

     // If no number is entered, use 5 by default
     if (!number) {
         number = 5;
     }

     // Display multiplication table
     document.write("<h2>Multiplication Table of " + number + "</h2>");
     for (var i = 1; i <= 10; i++) {
         document.write(number + " x " + i + " = " + (number * i) + "<br>");
     }
      // Take subjects names from user
      var subject1 = prompt("Enter name of Subject 1:");
      var subject2 = prompt("Enter name of Subject 2:");
      var subject3 = prompt("Enter name of Subject 3:");

      // Total marks for each subject
      var totalMarks = 100;

      // Take obtained marks for each subject from user
      var obtainedMarksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
      var obtainedMarksSubject2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
      var obtainedMarksSubject3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

      // Calculate total marks and percentage
      var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
      var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

      // Display the result in a table
      document.write("<h2>Result</h2>");
      document.write("<table>");
      document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
      document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
      document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
      document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
      document.write("</table>");
      document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
      document.write("<p>Percentage: " + totalPercentage.toFixed(2) + "%</p>");