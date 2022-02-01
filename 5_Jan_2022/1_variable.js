// variable Declaration
//var, let, const
// you don't need to specify the type of the variable
// var a //variable will be initialized with an undefined value
// console.log(a) //undefined

//JavaScript is a Dynamically Typed Language
// a = 3;
// console.log(a) //prints 3
 
// a = 'I am a String'
// console.log(a)

// a = true
// console.log(a)

// a = null
// console.log(a)

//Number
// var a = 2
// var n = 2.3
// var f = 20.3

// console.log(a)
// console.log(n)
// console.log(f)

//Boolean
// var t = true
// var f = false
// console.log(t)
// console.log(f)

// //Undefined
// var u;
// console.log(u)

// //null
// var n = null;
// console.log(n)

// //Strings
// var s = 'a'
// var s2 = 'I am a String'

// console.log(s)
// console.log(s2)

//var keyword has some problems
//Redeclaration
// var b = 'Hello'
// console.log(b) //prints hello

// var b = 'bye'
// console.log(b)

//Overcoming Redeclaration
//using let keyword
// let b = 'HEllo'
// console.log(b) //prints hello
// let b = 'bye'  //Error : b is already been declared(Redeclaration Error)
// console.log(b) 
// //we can reassign let 


//loops
//for loop
//isPrime

// var flag = true;
// var num = 13;

// for(var i = 2; i*i < num; i++){
//     if(num%i == 0){
//         flag = false
//         break
//     }
// }

// if(flag ==  true){
//     console.log("Number is Prime")
// }
// else{
//     console.log("Number is not Prime")
// }
 //2nd Problem with var-scoping

 //let is block scoped 
 //var is function scoped

// if(10%2 == 0){
//     let a = 'Number is divided by two.'
//     console.log(a)
// }

//const keyword
const a = 2;
const a = 6; // no redeclaration allowed
a = 'hello'; // no reassigning allowed



