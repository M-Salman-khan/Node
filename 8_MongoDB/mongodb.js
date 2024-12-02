const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/testDatabase')
    .then(() => console.log("Connection is successful"))
    .catch(err => console.error("Couldn't connect to mongoDB", err))

//Schema

const courseSchema = mongoose.Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true, minlength:5, maxlength:200 },
    // tags:[String],
    tags:{type:Array, validate:{
        validator:function(tags){
            return tags.length >1
        }
    }},
    category:{
        type:String,
        required:true,
        enum:["DSA", "ReactJS", "Web", "Mobile"]
    },
    publisheDate: { type: Date, default: Date.now },
    isPublished: { type: String, required :true},
    rating: {type : Number ,required: function(){return this.isPublished}}
})

const Course = mongoose.model("Course", courseSchema)

async function createCourse() {
    const course = new Course({
        name: 'Express',
        creator:'Mr.XYZ',
        // tags:['express','JS'], // by default we need to add atleast two tags 
        tags:['express'],
        isPublished:true,
        category:"Web",
        rating:4
    })
    try {
        // await course.validate()
        const result = await course.save();
        console.log(result)
    }
    catch (error) { 
        // console.error(error.message)
        for(field in error.errors){
            console.log(error.errors)
        }
    }
}
createCourse()

//Rating 0 to 5

//createCourse()

//eq(equal)
//gt(greater than)
// gte(greater than and equal to)
//lt(less than)
//lte(less than equal to)

//in
//not in

async function getCourses() {
    const course = await Course.find({ rating: { $in: [4.9, 4.5, 4.2, 3.6] } }).select({ name: 1, publisheDate: 1, rating: 1 }).and([{ name: 'Java' }, { rating: 2 }])
    console.log(course)
}//Reading the data


// createCourse()
// getCourses()

async function updateCourse(id) {
    let course = await Course.findById(id)
    if (!course) return;

    course.name = 'C++'
    course.creator = 'Steves'
    const updatedCourse = await course.save()
    console.log(updatedCourse)
}//Updating


// updateCourse('672639baedc43af809105cfe')


//Deleting
async function deleteCourse(id) {
    let course = await Course.findByIdAndDelete(id)

    console.log(course)
}

// deleteCourse('672639baedc43af809105cfe')