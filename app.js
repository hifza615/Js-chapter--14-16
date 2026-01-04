//****CHAPTER 14-16*******//

//****CHAPTER 14-16********//

//****CHAPTER 14-16****QUESTION 1****//
//var studentNames = [];
//console.log("Student Names Array:", studentNames);

//****CHAPTER 14-16****QUESTION 2****//
//var studentNamesObj = new Array();
//console.log("Student Names Object Array:", studentNamesObj);

//****CHAPTER 14-16****QUESTION 3****//
//var fruits = ["Apple", "Banana", "Mango"];
//console.log("Fruits Array:", fruits);

//****CHAPTER 14-16****QUESTION 4****//
//var numbers = [10, 20, 30, 40];
//console.log("Numbers Array:", numbers);

//****CHAPTER 14-16****QUESTION 5****//
//var boolean = [true, false, true];
//console.log("Boolean Array:", boolean);

//****CHAPTER 14-16****QUESTION 6****//
//var mixedArray = ["Hifza", 17, true, 85.5];
//console.log("Mixed Array:", mixedArray);

//****CHAPTER 14-16****QUESTION 7****//
//var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
//for (var i = 0; i < qualifications.length; i++) {
    //console.log((i + 1) + ") " + qualifications[i]);}
//****CHAPTER 14-16****QUESTION 8****//
//var studentNames = ["smith", "john", "elia"];
//var studentScores = [420, 380, 450];
//var totalMarks = 500;

//for (var i = 0; i < studentNames.length; i++) {
   // var percentage = (studentScores[i] / totalMarks) * 100;
   // console.log("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%");}

//****CHAPTER 14-16****QUESTION 9****//
//var colors = ["Red", "Blue", "Green"];
//console.log("Initial Colors Array:", colors);

// a. Add color to the beginning
//var colorBegin = prompt("Which color do you want to add at the beginning?");
//colors.unshift(colorBegin);
//console.log("After adding color at beginning:", colors);

// b. Add color to the end
//var colorEnd = prompt("Which color do you want to add at the end?");
//colors.push(colorEnd);
//console.log("After adding color at the end:", colors);

// c. Add two more colors to the beginning
//colors.unshift("Pink", "Purple");
//console.log("After adding two colors at beginning:", colors);

// d. Delete the first color
//colors.shift();
//console.log("After deleting first color:", colors);

// e. Delete the last color
//colors.pop();
//console.log("After deleting last color:", colors);

// f. Add color at desired index
//var addIndex = parseInt(prompt("At which index do you want to add a color?"));
//var addColor = prompt("Which color do you want to add?");
//colors.splice(addIndex, 0, addColor);
//console.log("After adding color at index " + addIndex + ":", colors);

// g. Delete color(s) at desired index
//var delIndex = parseInt(prompt("At which index do you want to delete color(s)?"));
//var delCount = parseInt(prompt("How many color(s) do you want to delete?"));
//colors.splice(delIndex, delCount);
//console.log("After deleting " + delCount + " color(s) from index " + delIndex + ":", colors);

//****CHAPTER 14-16****QUESTION 10****//
//var studentScores = [320, 230, 480, 120];
//console.log("Scores before sorting:", studentScores);
//studentScores.sort(function(a, b){ return a - b; });
//console.log("Scores after sorting in ascending order:", studentScores);

//****CHAPTER 14-16****QUESTION 11****//
//var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
//var selectedCities = cities.slice(0, 3);
//console.log("Selected Cities Array:", selectedCities);

//****CHAPTER 14-16****QUESTION 12****//
//var arr = ["This ", "is ", "my ", "cat"];
//var joinedString = arr.join("");
//console.log("Joined String:", joinedString);

//****CHAPTER 14-16****QUESTION 13****//
//var devices = [];

//devices.push("Keyboard");
//devices.push("Mouse");
//devices.push("Printer");
//devices.push("Monitor");

//document.write(devices.shift() + "<br>");
//document.write(devices.shift() + "<br>");
//document.write(devices.shift() + "<br>");
//document.write(devices.shift() + "<br>");

//****CHAPTER 14-16****QUESTION 14****//
//var devices = [];

//devices.push("Keyboard");
//devices.push("Mouse");
//devices.push("Printer");
//devices.push("Monitor");

//document.write(devices.pop() + "<br>");
//document.write(devices.pop() + "<br>");
//document.write(devices.pop() + "<br>");
//document.write(devices.pop() + "<br>");

//****CHAPTER 14-16****QUESTION 15****//
//var devices = [];
//var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

//document.write("<select>");

//document.write("<option>" + manufacturers[0] + "</option>");

//document.write("<option>" + manufacturers[1] + "</option>");

//document.write("<option>" + manufacturers[2] + "</option>");

//document.write("<option>" + manufacturers[3] + "</option>");

//document.write("<option>" + manufacturers[4] + "</option>");

//document.write("<option>" + manufacturers[5] + "</option>");

//document.write("</select>");
