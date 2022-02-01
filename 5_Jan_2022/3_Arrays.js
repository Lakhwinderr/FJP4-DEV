//Don't confuse with java arrays and javascript arrays.
// in javascript arrays are dynamic. i.e - no need to give the size of array.
// even the values that can be stores need not to be of same type
// type and size both are dynamic


let arr = [] // array declaration 
let cars = ['BMW', 'Mustang', 'Mercedes', 'Ferrari'] //same datatype
// let sampleArray = [3, 'Lakhwinder', true, null]
// console.log(cars)
// console.log(sampleArray)

//Accessing the elements of the array.
//0th indexing same as in Java
console.log(cars[2])
console.log(cars[1])

//Replacing an element
cars[2] = 'Tesla'
console.log(cars[2])
console.log(cars)

//Add method
cars[4] = 'Ford'
console.log(cars)

//Array methods

cars.pop()
console.log(cars)
cars.pop()
console.log(cars)
cars.push('Maruti')
console.log(cars)
console.log(cars.length)
console.log(cars.join(' and '))
console.log(cars)

//shift and unshift
cars.shift() //removes the element from the starting of the array, 0th index
console.log(cars)
cars.unshift('Jeep')
console.log(cars)

console.log('The length of the cars array is',cars.length)

//2d array in javascript
let matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
]

console.log(matrix[1][1])