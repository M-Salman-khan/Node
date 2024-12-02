const express = require('express');
const {Category, validateData} = require("../models/categoriesModel")
const router=express.Router()




// const categories = [
//     { id: 1, name: 'Web' },
//     { id: 2, name: 'Mobile' },
//     { id: 3, name: 'Photography' }
// ];

// Get all categories
route.get('/', async(req, res) => {
    let categories = await Category.find()
    res.send(categories);
});

// Add a new category
route.post('/', async (req, res) => {
    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)

    if (!req.body.name) {
        return res.status(400).send("Category name is required");
    }
    const category = new Category({
        name:req.body.name
        })
        // id: categories.length + 1,
        // name: req.body.name
    
    await category.save();
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

    // let category = categories.find(category => category.id === parseInt(req.params.id))

    // if (!category) return res.status(404).send("The category is you are looking for is doesn't exist")
    // const index = categories.indexOf(category)
    // categories.splice(index,1)
    res.send(category)
});

route.get('/:id',async (req,res)=>{
    const category = await Category.findById(req.params.id)
    if (!category) return res.status(404).send("The category with the given ID was no ");
    res.send(category);
})

module.exports = router