// // TypeScript is a  programing language. typescript code is converted into javascript code because browsers don't understand ts code.

// // When to use TypeScript
// // i) when you are creating a complex appliction
// // ii) when you want strict typescheaking to cayght the errors while coding

// // When Not Use TypeScript
// // i) when you are creating a simple app
// // ii) when your buget is tight
// // iii) when you think you can do it easily without using ts

// // Requriments
// // i) you need to know js
// // ii) you must need a typescirpt compiler to convert the ts code to js

// // ( Advantages Of Using TypeScript )
// // TypeScript is all about type saftey which helps to catch error on compiled time or while writting the code.

// //==========================================  STEPS =======================================
// // 1) INSTALATION:
// //  => to install typescipt compiler globally you have to run command "npm i -g TypeScript"
// //  => to convert ts file to js you have to run "tsc filename.ts"

// // 2)First Command:
// // you know that every typescipt code is a valid js code so this example is correct
// console.log("Hello Wrold");

// // 3)WHY TYPESCRIPT:
// // if our ts files are being converted into js files then why we are writing ts.This example will explain it:

// // eg. (WRONG CODE)
// let price: number = 100;
// price = "saim";

// // you can see that it is giving me error but in vanalia js it will not give me any error and it is a valid js code.Because ts is al about type SAFTEY it will not allow to change the the price from number to a sting beacuse it has been assigned as a inter you can't set its value to a string or any other

// // eg. (CORRECT CODE)
// let amount: number = 100;
// amount = 101;
// // it is the correct code because we are not changing the data type of the variable we are just changing the value of the variable

// // Data Types in JavaScript
// // null
// // number (can be integer or float)
// // string
// // undefined
// // boolean
// // BigInt
// // Object
// // arrays

// // Data Types in TypeScript
// // you can use data type of javascript in ts but TypeScript also provides you some new or more types

// // any
// // enum
// // never
// // UnKnow
// // Tuples

// // TIPS:
// // i)if you have a large number for eg 123718232 ts allows you to make it readable  such as  123_718_232
// //======================== *** Learning Starts *** ==========================

// // Section ONE (Fundaments):
// // 1) any type
// // 2) arrays
// // 3) Tuples
// // 4) Enums
// // 5) Functions
// // 6) Objects

// //  Built in types

// // let course: string = "TypeScipt";
// // let sales: number = 1000;
// // let commingSoon :boolean = true;

// // BOTH SAME CODE and no any error  it  is a vaild code

// // let course= "TypeScipt";
// // let sales = 1000;
// // let commingSoon = true;

// // HOW BOTH ARE SAME ????????
// // beause typescipt is smart so we don't need to annonate the type of it. ts can automatically guess if the variable is being inilized by its value and you cant change it later

// // _______________________________________________________________________________________________________________________

// // ANY TYPE
// // the any type allows you to the value you want you can assign it with number and later you can use it as a string or boolean. BUT you will lose the benefit of using ts so try to avoid use any as mcuh as you can. Example

// let age: any;
// age = 7;
// age = "seven";

// // you can see that the above example is not giving any kind of error but if you use any every where in ts then you will not use ts in a proper or poweful way

// // _______________________________________________________________________________________________________________________

// // Arrays
// // in js you can create an array with each elment can be different maybe string,number,boolean .BUT what if you pass it to a funtion which accept a array of only numbers in that case it can caues or missbehave

// // LIkE (Igonre the error is pure js code):
// let arr = [1, "1", true];
// function giveMeNumbers(a, b, c) {
//   return a + b + c;
// }
// giveMeNumbers(arr);

// // NOW ts code
// let array: number[] = [
//   1, 2, 3,
// ]; /*this line tells that make a array of only number elemnts you can not use different types of elment in the array of numbers */

// let array1 =
//   []; /* now it is not a number or other array it is an any tpye array and can add diffrent elements in same array which is aginst using typescript*/

// // INSTEAD YOU HAVE TO CALL LIKE
// let array_of_String: string[] = ["saim", "ts", "js"];

// // TUPLES
// // tuple is a fixed length array with it fixed types for example you want to make a array of user which has two elemensts [1,"saim"] this is not allowed in ts but by using tuples in ts you can do it.

// let user: [number, string] = [1, "saim"];

// // ENUMS :
// // enums is a built in ts datatype that is useful to deal with list of realated constants.

// // const small = 1;
// // const medium = 2;
// // const large = 3;

// const enum Size {
//   Small,
//   Medium,
//   Large,
// } /* by default it will assign value for Small as 0 ans so on */
// // by declaring teh enum as a constant it will give a simple js converted code or more optimized code
// const small_T_Shirt: Size = Size.Small;

// // ____________________________________________________________________________________________

// // **************************** FUCNTION *****************************************
// /* "noUnusedParameters": true, is use when we have a parameter and we dont use it we have tp o on it 
// going to give you error 
//  "NoUnusedparamerts" Raise an error when a function parameter isn't read;
//  ""noImplicitReturns" Enable error reporting for codepaths that do not explicitly return in a function.

//  TIP:(WE should properly annotate our funtions to cure unEXpercted behaviour);
//  */

// function person(name: string, age: number): number {
//   return name != "" ? age++ : age--;
// }
// person("saim", 19);
// person("saim",19, 8); /*if i tried to add a new argument i cant do it with typescript */

// // **************************** OBJECTS *****************************************
// // if you annotate a type and dont use in object then ts will give you error   
// // if you add READONLY Property then no one can change the value

// const Company: {
//   employee: number;
//   readonly adress: string;
//   profit: boolean;
// } = {
//   employee: 10,
//   adress: "lahore",
//   profit: true,
// };

// // ADVANCE TS 

// // ********************************** TYPE Allises *****************************