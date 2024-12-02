
const Joi = require('joi');
const mongoose = require('mongoose');
const Course = mongoose.model('Course', new mongoose.Schema({
    title: {
        type: String, required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    category: {

    },
    creator: {
        type: String, required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
}));

function validateCourse(course) {
    const schema ={
        title: Joi.string().min(5).max(50).required(),
        categoryId: Joi.string().required(),
        creator: Joi.string().min(5).required(),
        rating: Joi.number().min(0).required()
    };
    
    return schema.validate(course);
}

exports.Course=Course;
exports.validate=validateCourse;