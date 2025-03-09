
//Differences between JS and TS
//1. JS is a dynamically typed language, while TS is a statically typed language
//2. JS is an interpreted language, while TS is a compiled language
//3. JS is a weakly typed language, while TS is a strongly typed language
//4. JS is a scripting language, while TS is a programming language


var customerfirstName = "Tom"; //in TS, when we first assigned a string to a variable, 
//the variable is of type string and cannot be changed to any other type
//customerfirstName = 10; //error
// for ex. 100 is a number and it is not assignable to a variable of type string
// but in JS , it is possible to change the type of a variable
//var customerfirstName = 100; //no error in JS
var customerlastName = "Hanks";
var customerID = 101;

/*
we explicitly specify the type of a variable by using the colon (:) followed by the type
*/
var customerfirstName1: string = "Tom";
var age: number = 20;

//we can create our own custom types using the type keyword
type stringOrNumber = {firstName: string, lastName: string, active: boolean};
var firstCustomer = {firstName: "Tom", lastName: "Hanks", active: true};
