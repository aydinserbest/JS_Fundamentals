//relational or comparison operators

// > is greater than
// < is less than
// >= is greater than or equal to
// <= is less than or equal to
var result = 10 > 5 
/*
with a relational operator (this is also logical operator) we can compare two values
and will be always a boolean value
so it will gonna return true or false
we are making comparison if 10 is greater than 5
10 is greater than 5 so the result will be true
*/
console.log(result) //output is: true
var result2 = 5 > 10 //output is: false
console.log(result2)
var result3 = 5 < 10 //output is: true
console.log(result3)
var result4 = 5 < 5 //output is: false
console.log(result4)
var result5 = 5 <= 5 //output is: true
console.log(result5)
var result6 = 5 >= 5 //output is: true
console.log(result6)
var result7 = 6 >= 5 //output is: true
console.log(result7)

// equality operators
// == is equal to
// === is equal value and equal type
var x = 1
// JavaScript "==" operator converts data types automatically when comparing values.
console.log(x == '1') //output is: true
// Loose comparison (different types can be equal)
//we do not compare the data types
//we compare the values
//if the values are the same, it will return true
//if the values are not the same, it will return false
 // true (JavaScript converts '1' string to a number)

 // "===" operator Strict comparison
 // //and does NOT convert types, both value and type must be the same.
 //we are not only checking the values
    //we are also checking the data types
console.log(x === '1') //output is: false
// false (1 is a number, '1' is a string)

//if we change the value to number
console.log(x === 1) //output is: true
console.log(x != '1') //output is: false
console.log(x !== '1') //output is: true

/*
 Why?
 When x == '1' runs:
 - JavaScript automatically converts '1' (string) to 1 (number).
 - So, 1 == 1 becomes true.

 When x === '1' runs:
 - JavaScript does NOT convert types.
 - 1 (number) and '1' (string) are different types, so it returns false.
*/

// != is not equal
// !== is not equal value or not equal type
