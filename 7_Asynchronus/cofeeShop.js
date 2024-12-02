function placeOrder(drink){
    return new Promise((resolve,reject)=>{
        if (drink==='coffee') resolve("Order for coffee is recieved");
        else reject("Other order rejected");
    })
}

function processOrder(order){
    return new Promise((resolve)=>{
        console.log("Order is being processed")
        resolve(`${order} is Seved`)
    })
}

placeOrder('coffee').then((orderPlaced)=>{
    console.log(orderPlaced)
})