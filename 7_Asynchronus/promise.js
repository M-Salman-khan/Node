//How to produce promise
let myPromise = new Promise((resolve,reject)=>{
    const a=5
    const b=4

    setTimeout(() => {
        if (a==b){
            resolve("The values are equal")
        }
        else{
            reject("The values are not equal")
        }
    }, 2000);
})

//pending state
//console.log(myPromise)

//fullfiled - then method
myPromise.then(function(result){
    console.log(result)
})


//reject - catch method
myPromise.catch(function(result){
    console.log(result)
})