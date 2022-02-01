const path = require('path')

let filePath = 'D:\\FJP4 dev\\10_Jan_2022\\1.txt'

let extensionName = path.extname(filePath) //this will print the extension name

console.log(extensionName)

let fileName = path.basename(filePath) //this will print full name

console.log(fileName)

console.log(__dirname)

console.log(__filename)

