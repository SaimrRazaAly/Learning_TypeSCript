function findSquare(num) {
    return num * num;
}
console.log(findSquare(2));
// printing the sum of two numbers by using a function
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
// a function that tell that a number is even or odd
(function EvenOdd(num1) {
    if (num1 % 2 == 0) {
        return console.log("is a even number");
    }
    else {
        console.log("the enter number was a odd number");
    }
})(2);
// today we will learn about the concept of data type in ts
//  EX :1 Define Variables with Annotations
// Create variables for a person’s name, age, and whether they are married (use string, number, and boolean).
var username = "saim";
var userage = 20;
var married = false;
// EX 2 Array of Numbers and Strings
// Create an array of your favorite numbers and an array of your favorite colors.
var numbers = [2, 4, 6, 8];
var colors = ["red", "orange", "yellow"];
// Ex 2 Union Type Example
// Write a function formatValue that takes a parameter of type string | number and returns a formatted string.
// Example:
(function LearningUnion(input1) {
    return "the value you enterd was ".concat(input1);
})(2);
// EX 4 Literal Type for Days
// Create a variable that can hold one of the days of the week ("Monday" | "Tuesday" | ...).
var week;
var newdate = new Date();
var day = newdate.getDay;
console.log(day);
week = " Wednesday";
console.log("today is ".concat(week));
