//! Chapter 12 and 13

//? Q1

// var ch = prompt("Enter a character:");

// if  (ch >= "A" && ch <= "Z"){
//     document.write(ch + " is an UpperCase character <br>");
// }
// else if (ch >= "a" && ch <= "z"){
//     document.write(ch + " is an LowerCase character <br>");
// }
// else{
//     document.write(ch + " is a number <br>");
// }

 
//? Q2

// const num1 = +prompt("Enter the first integer:");
// const num2 = +prompt("Enter the second integer:");

// if (num1 === num2){
// document.write("Both numbers are equal: " + num1);
// }
// else if (num1 > num2){
// document.write("The larger number is: " + num1);
// }
// else{
// document.write("The larger number is: " + num2);
// }


//? Q3

// var num = +prompt("Enter any number: ");

// if(num > 0){
//     document.write(num + " is a positive number.");
// }
// else if(num < 0){
//     document.write(num + " is a negative number.");
// }
// else if(num === 0){
//     document.write(num + " is zero.")
// }
// else{
//     document.write("Invalid input")
// }


//? Q4

// var char = prompt("Enter a character: ").toLowerCase();

// if(char.length == 1){
//     if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
//         alert("true")
//     }
//     else{
//         alert("false")
//     }
// }
// else{
//     alert("Invalid input.")
// }


//? Q5

// const correctPassword = "MyPassword";
// const enteredPassword = prompt("Enter your password: ");

// if(!enteredPassword){
//     alert("Please enter your password");
// }
// else if(enteredPassword === correctPassword){
//     alert("Correct! The password you entered matches the original password")
// }
// else{
//     alert("Incorrect password")
// }


//? Q6

//? else opening bracket was missing in this question which is now added

// var greeting;
// var hour = 13;

// if (hour < 18){
//     greeting = "Good day";
// }
// else { 
//     greeting = "Good evening";
// }


//? Q7

// var time = prompt("Enter time in 24 hour format", "1200");

// if (time >= 0000 && time < 1200){
//     alert("Good morning!")
// }
// else if (time >= 1200 && time < 1700){
//     alert("Good afternoon!")
// }
// else if (time >= 1700 && time < 2100){
//     alert("Good evening!")
// }
// else if (time >= 2100 && time <= 2359){
//     alert("Good night")
// }
// else {
//     alert("Invalid input")
// }


//! Chapter 14 - 16

//? Q1

// var studentsName = [];

//? Q2

// var studentsName = [];

//? Q3

// var stringsArray;
// stringsArray = ["black", "white", "grey", "blue"];

//? Q4

// var numberArray = [2, -34, 0, 57.89];

//? Q5

// var booleanArray = [true, false];

//? Q6

// var mixedArray = ["name", 324, true, "s"];

//? Q7

// var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
// qualificationList = "Qualification: <br>";

// for(var i=0; i<qualification.length; i++){
//     qualificationList += (i+1)+ ") "+ qualification[i]  + "<br>";
// }
// document.write(qualificationList);


//? Q8

// const studentNames = ["Michael", "John", "Tony"];
// const studentScores = [320, 230, 480];

// const totalMarks = 500;

// for (let i = 0; i < studentNames.length; i++) {
//     const name = studentNames[i];
//     const score = studentScores[i];
//     const percentage = (score / totalMarks) * 100;
    
//     const message = `Score of ${name} is ${score}. Percentage: ${Math.round(percentage)}%<br>`;
//     document.write(message);
// }

//? Q9

// var colors = ["black", "blue", "green", "purple"];
// alert(colors);

// //* (a)
// var beginColor = prompt("What color do want to add to the beginning of the array?").toLowerCase();
// colors.unshift(beginColor);
// document.write("Colors after adding colour to the beginning: <br>", colors, "<br>");

// //* (b)
// var endColor = prompt("What color do want to add to the end of the array?").toLowerCase();
// colors.push(endColor);
// document.write("<br>Colors after adding color to the end: <br> ",colors, "<br>");

// //* (c)
// colors.unshift("violet", "magenta");
// document.write("<br>Colors after adding two more colors to the beginning: <br> ",colors, "<br>");

// //* (d)
// colors.shift();
// document.write("<br>Colors after deleting first color: <br> ",colors, "<br>");

// //* (e)
// colors.pop();
// document.write("<br>Colors after deleting last color: <br> ",colors, "<br>");

// //* (f)
// var index_f = +prompt("enter at which index you want to add color:");
// var color_f = prompt("Enter the color you want to add: ");
// colors.splice(index_f, 0, color_f);
// document.write("<br>Colors after adding color at specific index: <br> ",colors, "<br>");
  
// //* (g)
// var index_g = +prompt("enter at which index you want to remove color:");
// var removeColors = +prompt("How many colors you want to remove?");
// colors.splice(index_g, removeColors);
// document.write("<br>Colors after removing colors at specific index: <br> ",colors, "<br>");

//? Q10

// var scores = [320, 230, 480, 120];
// document.write("Scores of Students : ", scores);
// document.write("<br>Ordered Scores of Students : ",scores.sort());

//? Q11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = [cities[2], cities[3]];

// document.write("Cities list: <br>", cities);
// document.write("<br><br>Selected cities list: <br>", selectedCities);

//? Q12

// var arr = ["This", "is", "my", "cat"];
// var combinedString = arr.join(" ");

// document.write("Array: <br>", arr);
// document.write("<br><br>String: <br>", combinedString);


//? Q13

// var devices = ["keyboard", "mouse", "printer", "monitor <br><br>"];
// document.write("Devices: <br>", devices);

// for (var i=0; i<devices.length; i++){
//     document.write("Out: <br>", devices[i], "<br>");
// }


//? Q14

// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices: <br>", devices, "<br><br>");

// for (var i=devices.length-1 ; i>=0; i--){
//     document.write("Out: <br>", devices[i], "<br>");
// }