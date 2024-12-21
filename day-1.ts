function findSquare(num: number): number {
  return num * num;
}
console.log(findSquare(2));

// printing the sum of two numbers by using a function

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

// a function that tell that a number is even or odd
(function EvenOdd(num1: number) {
  if (num1 % 2 == 0) {
    return console.log("is a even number");
  } else {
    console.log("the enter number was a odd number");
  }
})(2);

// today we will learn about the concept of data type in ts
//  EX :1 Define Variables with Annotations

// Create variables for a person’s name, age, and whether they are married (use string, number, and boolean).

let username: string = "saim";
let userage: number = 20;
let married: boolean = false;

// EX 2 Array of Numbers and Strings
// Create an array of your favorite numbers and an array of your favorite colors.

let numbers: number[] = [2, 4, 6, 8];
let colors: string[] = ["red", "orange", "yellow"];

// Ex 2 Union Type Example

// Write a function formatValue that takes a parameter of type string | number and returns a formatted string.
// Example:

(function LearningUnion(input1: number | string): string {
  return `the value you enterd was ${input1}`;
})(2);

// EX 4 Literal Type for Days
// Create a variable that can hold one of the days of the week ("Monday" | "Tuesday" | ...).

let week:
  | "Monday"
  | "Tuesday"
  | " Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
week = "Thursday";
console.log(`today is ${week}`);
