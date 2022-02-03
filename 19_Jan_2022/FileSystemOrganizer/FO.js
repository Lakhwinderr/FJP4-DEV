// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder 
//and so on so at the end you will have a arranged set of files in specific folders

const fs = require('fs')
const path = require('path')

const helpModule = require('../commands/help')
const treeModule = require('../commands/tree')
const organizeModule = require('../commands/organize')

let input = process.argv.slice(2); //argv stands for argument values
let command = input[0];

let types = {
media: ["mp4", "mkv", "mp3", 'jpeg', 'png'],
archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
documents: ["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex",],
app: ["exe", "dmg", "pkg", "deb"],
}

switch (command) {
  case "tree":
    treeModule.treeFnkey(input[1])
    break;
  case "organize":
    organizeModule.organizeFnkey(input[1])
    break;
  case "help":
    helpModule.helpFnkey
    break;
  default:
    console.log("Please enter a valid command");
}








//D:\FJP4 dev\TestFolder\organized_Files - we are ready to crearte folder here
