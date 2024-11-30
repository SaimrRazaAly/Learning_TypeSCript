// optional paratmerts in funtion
(function greeting(name: string, greeting?: string): string {
  return `${greeting} ${name}`;
})("saim");

// 3. Default Parameters
// Example:
function calculatePrice(price: number, tax: number = 0.1): number {
  return price + price * tax;
}

console.log(calculatePrice(100)); // Output: 110 (default tax is 10%)
console.log(calculatePrice(100, 0.2)); // Output: 120

function getInfo(value: number | string): string {
  if (typeof value === "number") {
    return `User ID is ${value}`;
  } else {
    return `User name is ${value}`;
  }
}

console.log(getInfo(101)); // Output: User ID is 101
console.log(getInfo("Ali")); // Output: User name is Ali

// 5. Rest Parameters
// You can use rest parameters to handle multiple arguments as an array.
function Reducing(...number: number[]): number {
  return number.reduce((total, v) => total + v, 0);
}
console.log(Reducing(1, 2, 3, 4, 5));

// 7. Void and Never Return Types

// void: Indicates a function doesn’t return a value.
// never: Indicates a function never returns (e.g., it throws an error or runs forever).

function logMessage(message: string): void {
  console.log(message);
}

function throwError(message: string): never {
  throw new Error(message);
}

// ======= PROBLEM (1) =====
/*Calculate Area
Write a function calculateArea that:

Accepts two numbers (width, height).
Returns the area if both are provided.
Returns the square of one number if only one is provided.
Example:*/

function calculateArea(width?: number, height?: number): number {
  if (width && height) {
    return width * height;
  } else if (width && !height) {
    return width * width;
  } else if (height && !width) {
    return height * height;
  } else {
    return 404;
  }
}
calculateArea(5); // Output: 25
calculateArea(5, 10); // Output: 50

/*Write a function getLength that:

Returns the number of characters if a string is passed.
Returns the number of elements if an array is passed.
Example: */
function getLength(input: string | number[]): number {
  if (typeof input === "string") {
    return input.length; // Returns the number of characters in the string
  } else {
    return input.length; // Returns the number of elements in the array
  }
}

// Test cases
console.log(getLength("TypeScript")); // Output: 10 (number of characters)
console.log(getLength([1, 2, 4]));    // Output: 3 (number of elements)


// Rest Parameters
// Write a function average that calculates the average of any number of arguments.
// Example:

function average(...num:number[]):number{
  let length = num.length
  let sum  = num.reduce((t,v) => t+v,0 )
return sum / length
}
console.log(average(10, 20, 30)); // Output: 20
console.log(average(5, 15, 25, 35)); // Output: 20)