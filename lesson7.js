//loops
//for loop or for i loop

for (let i=0; i<5; i++) {
    console.log('Hello World ' + i)
}

var cars = ["BMW", "Audi", "Mercedes"]
//for of loop
for (let car of cars) {  //we can give any name instead of car
    console.log(car)
    if (car == 'Audi'){
        break
    }
}

//ES6 syntax for each loop
cars = ["Tesla", "Toyota", "Honda"]
cars.forEach(car => {
    console.log(car)
})


