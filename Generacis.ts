// EX 1
// problems come when i take as a number and later on it can give me a string which is possible so to avoid it we use generics
function getValue(val: any): any {
  return val;
}
getValue("5");

// EX 2
// problems come when i take as a number and later on it can give me a string which is possible so to avoid it we use generics
function getInput<Type>(val: Type): Type {
  return val;
}
getInput("6");
getInput(5);

// EX 3

type Car = {
  name: string;
  num_plate: number;
  model?: number;
};

function getCarInfo<Car>(input: Car): Car {
  return input;
}
const vitzData  = getCarInfo({ name: "vitz", num_plate: 5846 });
console.log(vitzData)
