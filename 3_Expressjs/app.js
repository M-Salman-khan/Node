const express = require('express')

const { middleware_1, middleware_2 } = require('./middleware/middle');

const morgan = require('morgan')
// import express from 'express'

const app = express()

//get, post, put, delete

app.use(express.json())

app.use(middleware_1)

app.use(middleware_2)

app.use(morgan('tiny'))

let courses = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'Html' }
]

app.get('/', (req, res) => (
    res.send('Hello this is me Nice to meet you')
))//Read


app.get('/about', (req, res) => (
    res.send('This is for Impact')
))


app.get('/Home', (req, res) => (
    res.send('This is Home')
))


app.get('/contact', (req, res) => (
    res.send('For contact us logon to www.techyera.com')
))


//courses route
app.get('/courses', (req, res) => (
    res.send(courses)
))

app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})//Create 


//Put method
app.put('/courses/:name', (req, res) => {
    let course = courses.find(course => course.name === req.params.name)
    if (!course) return res.status(404).send("The course is you are looking for is doesn't exist")

    course.name = req.body.name;
    res.send(course)
})//Update data

//Route parameters

app.get('/courses/:name', (req, res) => {
    // console.log(req.params)
    let course = courses.find(course => course.name === req.params.name)

    if (!course) return res.status(404).send("The course is you are looking for is doesn't exist")
    res.send(course)
})



//Delete

// app.delete('/courses/:name', (req, res) => {
//     let updatedCourses = courses.filter(course => course.name !== req.params.name);
//     courses = updatedCourses;
//     res.send(courses);
// });


app.delete('/courses/:id', (req, res) => {
    // let updatedCourses = courses.filter(course => course.id !== req.params.id);
    // courses = updatedCourses;
    // res.send(courses);

    let course = courses.find(course => course.id === parseInt(req.params.id))

    if (!course) return res.status(404).send("The course is you are looking for is doesn't exist")
    const index = courses.indexOf(course)
    courses.splice(index,1)
    res.send(course)
});

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Port is running on ${port}`))