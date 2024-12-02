const express = require('express');
const app = express();
const mongoose=require('mongoose')
const categories = require('./Routes/categories')
const students = require('./Routes/students')
app.use(express.json()); // to parse JSON bodies
app.use('/api/categories',categories); // to parse JSON bodies
app.use('/api/students',students)

mongoose.connect('mongodb://127.0.0.1/learningPlatform')
    .then(() => console.log("Connection is successful to Database"))
    .catch(err => console.error("Couldn't connect to mongoDB", err))




const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
