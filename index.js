const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const courses = [
    {
        id: '1',
        title: 'learn react'
    },
    {
        id: '2',
        title: 'learn vue'
    },
    {
        id: '3',
        title: 'learn angular'
    },
]

app.get('/', (req, res) => {
    res.send(courses)
})

app.put('/courses', (req, res) => {
    const course = courses.find(item => item.id === req.body.id)
    console.log(course)
    if (course) {
        course.title = req.body.title
        res.send(courses)
    } else {
        res.status(404).send('no records with this query')
    }
})

app.listen(3000, () => {
    console.log('listen to port 3000')
})
