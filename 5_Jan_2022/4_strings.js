// String is a sequence of characters 

let str = 'pepcoders'

console.log(str) 

//length property
console.log(str.length)

// String methods 

//1. Extraction methods

// slice method
let slicedStr = str.slice(3, 7)
console.log(slicedStr)

let youare = str.slice(3)
console.log(youare)

//subStr

let subString = str.substr(3, 4)
console.log(subString)

//Replacing  string's Content 
let sayHello = 'Hello Lakhwinder'
console.log(sayHello)

let sayBye = sayHello.replace('Hello', 'Bye')
console.log(sayBye)

//Uppercase Method and Lowercase

let text1 = 'Lakhwinder'
let text2 = text1.toUpperCase()
console.log(text2)
let text3 = text1.toLowerCase()
console.log(text3)

//Contatenation Methodd

let str0 = 'Lakhwinder'
let str3 = 'Singh'
let str4 = str0.concat(" ",str3)
console.log(str4)

//Trim method is used to remove all the whitespaces

let text = "       Lakhwinder Singh will crack google.       "
let trimmedText = text.trim();

console.log(text)
console.log(trimmedText)
