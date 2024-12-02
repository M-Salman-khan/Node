const express = require('express');
const {Course, validateData} = require("../models/coursesModel")
const route=express.Router()





// const courses = [
//     { id: 1, name: 'Web' },
//     { id: 2, name: 'Mobile' },
//     { id: 3, name: 'Photography' }
// ];

// Get all courses
route.get('/', async(req, res) => {
    let courses = await Course.find()
    res.send(courses);
});

// Add a new category
route.post('/', async (req, res) => {
    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message);
    let course=new Course({
        title:req.body.name,
        category:{

        },
        creator:req.body.creator,
        rating:req.body.rating
    })

    course = await course.save();

    res.send(category);
});



// // Update a category
route.put('/:id', async (req, res) => {
    const{error}=validateData(req.body)

    if(error) res.status(400).send(error.details[0].message)

    const category = await Category.findOneAndUpdate(req.params.id, {name :req.body.name}, {new: true});


    if (!category) return res.status(404).send("The Category with the given ID is not found");
    

    // if (!req.body.name) {
    //     return res.status(400).send("The Category with the given ID is not found");
    // }

    // category.name = req.body.name;
    res.send(category);
});

route.delete('/:id', async(req, res) => {
    const category=await Category.findByIdAndDelete(req.params.id)
    if(!category) return res.status(404).send("The category with the given id was not found")

    // let category = courses.find(category => category.id === parseInt(req.params.id))

    // if (!category) return res.status(404).send("The category is you are looking for is doesn't exist")
    // const index = courses.indexOf(category)
    // courses.splice(index,1)
    res.send(category)
});

route.get('/:id',async (req,res)=>{
    const category = await Category.findById(req.params.id)
    if (!category) return res.status(404).send("The category with the given ID was no ");
    res.send(category);
})

module.exports = route