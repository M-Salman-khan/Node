const express = require('express');
const route = express.Router();
const {validateData,Student}= require("../models/studentsModel")

// const { required } = require('joi/lib/types/lazy');
// const { type } = require('joi/lib/types/object');
// const { required } = require('joi/lib/types/lazy');

// const router = express.Router()




// const students = [
//     { id: 1, name: 'Web' },
//     { id: 2, name: 'Mobile' },
//     { id: 3, name: 'Photography' }
// ];

// Get all students
route.get('/', async (req, res) => {
    let students = await Student.find()
    res.send(students);
});

// Add a new student
route.post('/', async (req, res) => {
    const { error } = validateData(req.body)
    if (error) res.status(400).send(error.details[0].message)

    if (!req.body.name) {
        return res.status(400).send("student name is required");
    }
    const student = new Student({
        name: req.body.name,
        isEnrolled:req.body.isEnrolled,
        Phone:req.body.Phone
    })
    // id: students.length + 1,
    // name: req.body.name

    await student.save();
    res.send(student);
});



// // Update a category
route.put('/:id', async (req, res) => {
    const{error}=validateData(req.body)

    if(error) res.status(400).send(error.details[0].message)

    const student = await Student.findOneAndUpdate(req.params.id, {name :req.body.name,Phone:req.body.Phone,isEnrolled:req.body.isEnrolled}, {new: true});


    if (!student) return res.status(404).send("The Student with the given ID is not found");
    

    // if (!req.body.name) {
    //     return res.status(400).send("The Category with the given ID is not found");
    // }

    // category.name = req.body.name;
    res.send(student);
});

route.delete('/:id', async(req, res) => {
    const student=await Student.findByIdAndDelete(req.params.id)
    if(!student) return res.status(404).send("The student with the given id was not found")

    // let category = categories.find(category => category.id === parseInt(req.params.id))

    // if (!category) return res.status(404).send("The category is you are looking for is doesn't exist")
    // const index = categories.indexOf(category)
    // categories.splice(index,1)
    res.send(category)
});

route.get('/:id',async (req,res)=>{
    const student = await Student.findById(req.params.id)
    if (!student) return res.status(404).send("The student with the given ID was no ");
    res.send(student);
})


// module.exports = router