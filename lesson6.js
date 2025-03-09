//conditional statements

//if(condition){
    //code block
//}else{
    //code block
//}

//if hour is between 6 and 12: Good morning!
//if it is between 12 and 18: Good afternoon!
//otherwise: Good evening!

var hour = 17
if(hour >= 6 && hour < 12){
    console.log("Good morning!")
}else if(hour >= 12 && hour < 18){
    console.log("Good afternoon!")
}else{
    console.log("Good evening!")
}

var ageIsThanEighteen = true
var isUSCitizen = true

if(ageIsThanEighteen && isUSCitizen){
    console.log("This driver is eligible for DL")
}
else{
    console.log("This driver is NOT eligible for DL")
}