
const joi = require('joi');
const mongoose = require('mongoose')
//Define Mongoose Schema and Model
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    isEnrolled: {
        type: boolean,
        default: false
    },
    Phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 20
    }
})

const Student = mongoose.model('Student', studentSchema)


function validateData(student){
    const schema =  {
    name: Joi.string().min(3).max(50).required(),
    Phone: Joi.string().min(3).max(50).required(),
    isEnrolled: Joi.boolean()
};
return Joi.validate(student,schema);
}

exports.Student=Student;
exports.validateData=this.validateData;