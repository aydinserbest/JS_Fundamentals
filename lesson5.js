//logical "AND" operator
console.log(true && true); // all values have to be TRUE for expression to be TRUE
console.log(true && false); // if any value is FALSE, the expression is FALSE
console.log(false && true); // if any value is FALSE, the expression is FALSE
console.log(false && false); // if any value is FALSE, the expression is FALSE

//logical "OR" operator
console.log(true || true); // if any value is TRUE, the expression is TRUE
console.log(true || false); // if any value is TRUE, the expression is TRUE
console.log(false || true); // if any value is TRUE, the expression is TRUE
console.log(false || false); // if all values are FALSE, the expression is FALSE

var ageIsThanEighteen = true
var isUSCitizen = true

var eligibilityForDriverLicense = ageIsThanEighteen && isUSCitizen
console.log("This driver is eligible for DL: " + eligibilityForDriverLicense) 
ageIsThanEighteen = false
var eligibilityForDriverLicense = ageIsThanEighteen && isUSCitizen
console.log("This driver is eligible for DL: " + eligibilityForDriverLicense)

console.log("This driver is eligible for DL: " + (ageIsThanEighteen || isUSCitizen))

//logical "NOT" operator
console.log(!true); //output is: false
console.log(!false); //output is: true

console.log(!(5 > 10)); //output is: true
console.log(6 !== 10); //output is: true
