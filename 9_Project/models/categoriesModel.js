const joi = require('joi');
// const { required } = require('joi/lib/types/lazy');
const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 30 }
})

const Category = mongoose.model('Category', categorySchema)

function validateData(category) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return schema.validate(category);
}

exports.validateData = validateData;
exports.Category = Category;