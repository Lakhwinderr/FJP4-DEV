// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder 
//and so on so at the end you will have a arranged set of files in specific folders

const fs = require('fs')
const path = require('path')
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
    console.log("Tree Implemented");
    break;
  case "organize":
    organizeFn(input[1])
    break;
  case "help":
    helpFn()
    break;
  default:
    console.log("Please enter a valid command");
}

//Help Function will list all the ways by which yyou can run the commands of this project.
function helpFn() {
    console.log(`List of all the commands ->
                        1) Tree - node FO.js tree <dirPath>
                        2) Organize - node FO.js organize <dirPath>
                        3) Help - node FO.js help `)
}

//Organize function will organize all your target folder's files in a different folders acc to their extensions

function organizeFn(dirPath){
    let destPath
    if(dirPath == undefined){
        console.log('Please enter a valid Directory Path.')
        return;
    } //check whether directory is passed or not and if not simply return
    let doesExist = fs.existsSync(dirPath)
    if(doesExist){
        destPath = path.join(dirPath, 'organized_Files')
        //created a path for organized files folder

        //check whether organized files folder exists or not, if not make a directory
        if(fs.existsSync(destPath) == false){
            fs.mkdirSync(destPath)
        }
        else{
            console.log('Folder Already Exists')
        }
    }
    else{
        console.log('Please Enter a valid Path')
    }
    organizeHelper(dirPath, destPath)
}

function organizeHelper(src, dest){
    let childNames = fs.readdirSync(src)
    // console.log(childNames)
    for(let i = 0; i < childNames.length; i++){
      let childAddress = path.join(src, childNames[i])
      isFile = fs.lstatSync(childAddress).isFile()
      if(isFile){
        let fileCategory = getCategory(childNames[i])
        console.log(childNames[i] + ' belongs to ' + fileCategory)
        sendFiles(childAddress, dest, fileCategory)
      }
    }
}

function getCategory(filename){
    let extName = path.extname(filename).slice(1)
    //extracted the extensions of the target files
    // console.log(extName)
    for(let key in types){
      let cTypeArray = types[key]
      //we took out all the category type arrays here
      // console.log(cTypeArray)

      for(let i = 0; i < cTypeArray.length; i++){
        if(extName == cTypeArray[i]){
            return key
        }
      }
    }
    return 'others'

}


function sendFiles(src, dest, category){
    let catPath = path.join(dest, category)
    if(fs.existsSync(catPath) == false){
      fs.mkdirSync(catPath)
    }

    let fileName = path.basename(src)
    let destPath = path.join(catPath,fileName)
    fs.copyFileSync(src, destPath)
    fs.unlinkSync(src)
    console.log('Files Organized')
}


//D:\FJP4 dev\TestFolder\organized_Files - we are ready to crearte folder here
