//Javascript objects are in key value pair.

//to declare a object

let obj = {}
let person = {
    name : 'Lakhwinder',
    age : 24,
    gender : 'male',
}

let car = {
    brand : 'Mercedes',
    color : 'black',
    price : 10000,
}


let cap = {
    firstName : 'Steve',
    lastName : 'Rogers',
    friends : ['Bucky', 'Tony', 'Lakhwinder'],
    age : 203,
    isAvenger : true,
    address : {
        state : 'Punjab',
        city : 'Sunam',
        pin : 148031
    },
    sayHi : function(){
        console.log('Avenger says Hi')
    }
}

//dot notation
cap.sayHi()

//bracket notation
console.log(cap['firstName'])
console.log(cap['address']['city'])

//For in loop in objects
for(let key in cap){
    console.log('key : ', key)
    console.log('Value : ', cap[key])
}

cap.isAvenger = false; //updating an object
console.log(cap.isAvenger)

cap.lovers = ['Lakhwinder', 'Ayushi'] // addign new property to an object

delete cap.age

console.log(cap)

