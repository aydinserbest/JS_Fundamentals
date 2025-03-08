//concatination and interpolation
var price = 80
var itemName = "table"
var messageToPrint = "The price for your " +itemName+ " is " +price+ " dollars" //concatination
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //interpolation
console.log(messageToPrint)
console.log(messageToPrint2)
var messageToPrint3 = "The price is " + 5 + " dollars" //string + number + string
console.log(messageToPrint3)

/*
 1- Variables declared with "var" can be redefined.
    • The last "var messageToPrint = ..." line overwrites the previous value.

        var messageToPrint = "The price for your " +itemName+ " is " +price+ " dollars" //concatination
        var messageToPrint = `The price for your ${itemName} is ${price} dollars` //interpolation


 2- Variables declared with "let" or "const" cannot be redefined.
    • Using "let" or "const" with the same variable name causes an error.
    • "var" allows redefinition, but it removes the previous value.
*/


