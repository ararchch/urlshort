const Joi = require('joi');
const express = require('express');
const { readFile } = require('fs');
const { response } = require('express');

const app = express(); 
app.use(express.json());

app.get('/', (req, res) => {
      res.send('hello world');
});

let courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {

    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required')
        return; 
    }

    let course = courses.find(x => x.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('not found');
    res.send(course);
});

app.post('/api/courses', (req, res) => {

    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required')
        return; 
    }

    let course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})

app.put('/api/courses/:id', (req, res) => {

    let course = courses.find(x => x.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('not found');

    
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required')
        return; 
    }

    course.name = req.body.name;
    res.send(course);

});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(x => x.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    response.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));