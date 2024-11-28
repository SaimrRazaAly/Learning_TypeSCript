var name = "saim";
var age = 10;
var isStudent = true;
console.log("my name is ".concat(name, " and i am ").concat(age, " years old and this is ").concat(isStudent));
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
