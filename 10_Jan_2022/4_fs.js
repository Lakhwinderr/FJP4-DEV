//File System Module 
// ******** files ********.//

const fileSystem = require('fs')
const path = require('path')

// //1. We will be reading writing updating and deleting in a file.
// //To read a file, you can use readFileSync Method, This is synchronous method, readFile is async
// let content = fileSystem.readFileSync('f1.txt')
// console.log('This is my file data: ' + content) // we concatenate with a string to convert data in file(binary) to string/
// console.log(content.toString())

// //Writing to a file
// // writeFileSync method is used to write in a file.
// // fileSystem.writeFileSync('2.txt', 'Ayushi will crack the exam.')
// console.log(fileSystem.readFileSync('2.txt').toString())



// //if the file doesn't exist, it will create new file on its own.
// fileSystem.writeFileSync('3.txt', 'Lakhwinder will land a good job.')
// console.log(fileSystem.readFileSync('3.txt').toString())

// //append a file
// //appendFileSync is a method which is used to update a file.

// fileSystem.appendFileSync('2.txt', ' more data')
// console.log(fileSystem.readFileSync('2.txt').toString())

// //delete a file
// //unlinkSync method is used to delete a file.

// fileSystem.unlinkSync('3.txt')

//JS is completely synchronous language 
//** Directories **//

//create, delete, check, stats, content 

////making a directory
// fileSystem.mkdirSync('myDirectory')
// console.log('Directory Created')

//deleting a directory

// fileSystem.rmdirSync('myDirectory')

// console.log('Directory Removed')

//existsSync method lets you know that a file/folder exists or not
//and it return true or false

// let doesExist = fileSystem.existsSync('1.txt')
// console.log(doesExist)

// // lstatSync 
// let statistics = fileSystem.lstatSync('1.txt')
// console.log(statistics)

// console.log('is File?' , statistics.isFile())

// console.log('is Directory?', statistics.isDirectory())

//readDirSync

//readDirSync is a method which is used to see content inside a directory 

// let folderPath = 'D:\\FJP4 dev\\10_Jan_2022\\myDirectory'

// let folderContent = fileSystem.readdirSync(folderPath)

// console.log('Folder Content - ' + folderContent)

//Copying files from src to destination.

let srcFilePath = 'D:\\FJP4 dev\\10_Jan_2022\\2.txt'

let destinationFolderPath = 'D:\\FJP4 dev\\10_Jan_2022\\myDirectory2'

let tobecopiedfileName = path.basename(srcFilePath) // 2.txt

let destPath = path.join(destinationFolderPath, tobecopiedfileName)

fileSystem.copyFileSync(srcFilePath,destPath)
console.log('File Copied')

let content = fileSystem.readdirSync(destinationFolderPath)
console.log('Content - ' + content)
