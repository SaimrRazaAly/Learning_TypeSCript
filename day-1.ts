let name = "saim";
let age = 10;
let isStudent = true;
console.log(
  `my name is ${name} and i am ${age} years old and this is ${isStudent}`
);

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
}
)(2);