//1.hello world
console.log("Hello World!")

//2.Variables
var firstName = "John"
let lastName = "Doe"
console.log(firstName, lastName)

var age, birthOfDate, sex
age = 25
sex = "Male"

console.log(age)
age = 30  // override 
//variables can be re-assigned
console.log(age)

//3. constansts
const occupation = "Software Engineer"
console.log(occupation)

// we can't change the value of a constant until the end of the execution
// occupation = "Doctor" // error


// we must assign a value to a constant when we declare it
//const occupation // error

//4. Data types
var middleName = "David" // string, in JS ' ' is also valid
var age = 20 // number, without quotes, if we put quotes it will be a string
var isMarried = false // boolean, true or false
var yearsInMarriage = null // null, empty value, no value
//for ex. if our person is not married
//logically we can't have a value for years in marriage
//so we can assign it null
//null is expected result of a variable that has no value 
var numberOfCars = undefined // undefined, we can not use it, it is not defined
//for ex. if we have a variable that we will assign a value later
//we can assign it undefined
//undefined is not a valid value
