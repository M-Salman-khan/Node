const fs = require('fs')

//Reading a file

// let fileContent = fs.readFileSync('f1_text_file.txt')

// console.log('Here is a file content : - > ' + fileContent)

//writint a file 

// fs.writeFileSync('f1_text_file.txt', 'This is new content')
// console.log("File has been written")

//Append file

// fs.appendFileSync('f1_text_file.txt', '. This is appended text')
// console.log("File has been written")


//Deleting a file
// fs.unlinkSync('f3.txt')

//Directories

// fs.mkdirSync('myDirectory')

//check the content inside a directory
// let folderPath='D:\\Coding\\Web Development\\Node JS\\Scalar Tech Course\\Lec_2\\myDirectory'
// let folderContent = fs.readdirSync(folderPath)
// console.log('Folder content ' , folderContent)

//check wheather a directory exist or not 
// let doesExist = fs.existsSync('demo.js')
// console.log(doesExist)


//Remove directory
fs.rmdirSync('mydict')
console.log("File deleted succesfully")