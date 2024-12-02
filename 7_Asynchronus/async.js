const fs = require('fs')

console.log("I'm first line ")


// let data = fs.readFileSync('f1.txt')

// console.log('Data is -> '+data)


fs.readFile('f1.txt',cb_1)
function cb_1(err,data){
    if(err) console.log(err);
    console.log("Data 1 is ->  "+ data)
    fs.readFile('f2.txt',cb_2)
}

function cb_2(err,data){
    if(err) console.log(err)
    console.log("Data 2 is -> "+data)
    fs.readFile('f3.txt',cb_3)
}

function cb_3(err,data){
    if(err) console.log(err)
    console.log("Data 3 is -> "+data)
}

console.log("I'm last line ")