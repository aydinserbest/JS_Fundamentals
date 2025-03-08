//objects can hold multiple values of different types
//object is a collection of key-value pairs, seperated by commas
//object is defined by curly braces {}
//object is accessed by key

var customer = {
    firstName: "John",
    lastName: "Smith",
    age: 30
}
// get access to the object properties
//with dot notation
console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)
//or bracket notation
console.log(customer["firstName"])
console.log(customer["lastName"])
console.log(customer.age)
//now print with using interpolation with backticks
console.log(`First Name: ${customer.firstName}`)
console.log(`Last Name: ${customer.lastName}`)
console.log(`${customer.firstName} ${customer.lastName} is ${customer.age} years old`)

//object is mutable, we can change the values inside it
//change any values inside the object
customer.age = 40
console.log(customer.age)

customer.firstName = "David"
console.log(customer.firstName)
//or
customer["lastName"] = "Brown" // or customer['lastName'] = 'Brown'
customer['lastName'] = 'Yellow'
console.log(customer["lastName"])

//arrays
//is a entity which is a list of items that you want to save
//array is defined by square brackets []
//you just keep the values inside the square brackets


//array can hold multiple values of different types
var car = ["BMW", "Audi", "Mercedes"]
console.log(car) 
//array has exact order of the values and this order has an index
//array has an index starting from 0
//first element index is 0
//second element index is 1

//array is accessed by index
console.log(car[0])
console.log(car[1])
console.log(car[2])
//if we try to access an index that doesn't exist
//we will get undefined
console.log(car[3]) // output is: undefined
//override the values in array
car[0] = "Toyota"
console.log(car)

//our objects may have arrays as values
var customer = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    cars: ["BMW", "Audi", "Mercedes"]
}
console.log(customer)
console.log(customer.cars)
console.log(customer.cars[0])

