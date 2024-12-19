// Alises
//  it is used where a lot of data is coming and we have to use it as a argument for the function

type User = {
  name: string;
  password: string;
  age: number;
};

const user: User = {
  name: "saim",
  password: "123i",
  age: 12,
};
//  Now We will learn about the readonly in ts
// imagine that you wnat some feild to be optional and no ONE can change it once they have assign the value

// Example:

type userInfo = {
  readonly id: string;
  username: string;
};

const userInformation: userInfo = {
  id: "1231238udosi",
  username: "Saim",
};
userInformation.username = "Raza"; // allowed
// userInformation.id = "8495"; // not allowed beacuse of readonly

// Conditional checking USing (?)

type citizenStatus = {
  code: number;
  idCardNum: number;
  isMarried?: boolean;
};

//   Combinening Multiple type for more improve code structure
type carName = {
  carName: string;
};
type carModel = {
  carModel: number;
};

// making another type by combining multiple types
type CarDetails = carModel & carName & { price: number };

// now they are combined and you can use it
const MyCar: CarDetails = {
  carName: "BMW",
  carModel: 2008,
  price: 6000,
};
