// Write a JavaScript program to display the current day and time in the following format.
// Today is : Friday. 
// Current time is : 4 PM : 50 : 22
var dt = new Date();
var day = dt.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: " + daylist[day] + ".");
var hour = dt.getHours();
var minute = dt.getMinutes();
var second = dt.getSeconds();
var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
console.log("Current Time is: " + hour + prepand + ":" + minute + ":" + second);