function add(a, b){
    console.log('The sum is ', a + b)
}

function sub(a, b){
    console.log('The difference is ', a - b)
}

function div(a, b){
    console.log('The quotient is ', a/b)
}

function mul(a, b){
    console.log('The product is ', a * b)
}

//object to export functions
module.exports = {
    Additon : add,
    Subtraction : sub,
    Multiply : mul,
    Division : div
}
//module.exports is a object probided by node.s by ehich you can ecport your functions
//in key value pair you will use your function swith the keys you have assigned to them