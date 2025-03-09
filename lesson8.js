//function
// take the certain pieces of logic of your code and put it into the reusable component
//and then you can call your function from the different places and get acess to that source code
//so you do not need to repeat your code again and again
//you just call your function
//function is defined by the keyword function
//Declarative function
function helloOne(){
    console.log("Hello World One!")
}
//call the function
helloOne()
//again invoke the function
helloOne()

//anoyomous function
//function is assigned to a variable
//we can call this function by using the variable
var helloTwo = function(){
    console.log("Hello World Two!")
}

//the difference between declarative and anonymous function is that
//declarative function can be called before the function definition
//but anonymous function can not be called before the function definition

//ES6 syntax for function or arrow function
//arrow function is a shorter way to write a function
//it is more readable

var helloThree = () => {
    console.log("Hello World Three!")
}
helloThree()

//function with arguements
function printName(name, lastName){
    console.log("Hello " + name+ " " + lastName)
}
printName("John", "Smith")

//function returning a value

//the functions above make a certain operation
//but they do not return anything
//if we want to return something from the function
//we use the keyword return
function add(a, b){
    return a + b
}
var result = add(5, 10)
console.log(result)

function multiply(number){
    return number * number
}
var result = multiply(5)
console.log(result)

//import function from another file
//there are 2 ways to import function from another file
//first way
//we use the keyword import
import {printAge} from '../helpers/printHelper.js'
printAge(30) //SyntaxError: Cannot use import statement outside a module
//to handle this error, we need to add type:"module" in package.json file
//and then we can import the function from another file
//and then we can call the function

//second way to import function from another file
//import everything from the file
import * as helper from '../helpers/printHelper.js'
helper.printAge(40)




