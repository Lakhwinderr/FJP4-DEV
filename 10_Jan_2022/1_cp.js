// child process  module is node module which is used to create sub process inside it.
const cp = require('child_process') 
// console.log('Trying to open calculator with cild Process')
// cp.execSync('calc')

// console.log('Calculator Opened')

// console.log("Let's try to open paint")

// cp.execSync('mspaint')

// let output = cp.execSync('node demo.js')
// console.log('Output is ' + output)
cp.exec('start chrome https://www.amazon.in/')

