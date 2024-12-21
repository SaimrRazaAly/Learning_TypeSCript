// EX 1
// problems come when i take as a number and later on it can give me a string which is possible so to avoid it we use generics
function getValue(val) {
    return val;
}
getValue("5");
// EX 2
// problems come when i take as a number and later on it can give me a string which is possible so to avoid it we use generics
function getInput(val) {
    return val;
}
getInput("6");
getInput(5);
function getCarInfo(input) {
    return input;
}
var vitzData = getCarInfo({ name: "vitz", num_plate: 5846 });
console.log(vitzData);
