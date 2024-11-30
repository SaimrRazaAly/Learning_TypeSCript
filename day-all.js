// optional paratmerts in funtion
(function greeting(name, greeting) {
    return "".concat(greeting, " ").concat(name);
})("saim");
// 3. Default Parameters
// Example:
function calculatePrice(price, tax) {
    if (tax === void 0) { tax = 0.1; }
    return price + price * tax;
}
console.log(calculatePrice(100)); // Output: 110 (default tax is 10%)
console.log(calculatePrice(100, 0.2)); // Output: 120
function getInfo(value) {
    if (typeof value === "number") {
        return "User ID is ".concat(value);
    }
    else {
        return "User name is ".concat(value);
    }
}
console.log(getInfo(101)); // Output: User ID is 101
console.log(getInfo("Ali")); // Output: User name is Ali
// 5. Rest Parameters
// You can use rest parameters to handle multiple arguments as an array.
function Reducing() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (total, v) { return total + v; }, 0);
}
console.log(Reducing(1, 2, 3, 4, 5));
// 7. Void and Never Return Types
// void: Indicates a function doesn’t return a value.
// never: Indicates a function never returns (e.g., it throws an error or runs forever).
function logMessage(message) {
    console.log(message);
}
function throwError(message) {
    throw new Error(message);
}
// ======= PROBLEM (1) =====
/*Calculate Area
Write a function calculateArea that:

Accepts two numbers (width, height).
Returns the area if both are provided.
Returns the square of one number if only one is provided.
Example:*/
function calculateArea(width, height) {
    if (width && height) {
        return width * height;
    }
    else if (width && !height) {
        return width * width;
    }
    else if (height && !width) {
        return height * height;
    }
    else {
        return 404;
    }
}
calculateArea(5); // Output: 25
calculateArea(5, 10); // Output: 50
/*Write a function getLength that:

Returns the number of characters if a string is passed.
Returns the number of elements if an array is passed.
Example: */
function getLength(input) {
    if (typeof input === "string") {
        return input.length; // Returns the number of characters in the string
    }
    else {
        return input.length; // Returns the number of elements in the array
    }
}
// Test cases
console.log(getLength("TypeScript")); // Output: 10 (number of characters)
console.log(getLength([1, 2, 4])); // Output: 3 (number of elements)
// Rest Parameters
// Write a function average that calculates the average of any number of arguments.
// Example:
function average() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var length = num.length;
    var sum = num.reduce(function (t, v) { return t + v; }, 0);
    return sum / length;
}
console.log(average(10, 20, 30)); // Output: 20
console.log(average(5, 15, 25, 35)); // Output: 20)
