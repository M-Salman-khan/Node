
function middleware_1(req,res,next){
    console.log("I'm middleware")
    next()
}


function middleware_2(req,res,next){
    console.log("I'm second custom middleware")
    next()
}

module.exports = { middleware_1, middleware_2}