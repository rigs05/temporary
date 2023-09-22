// An updated version of this structure using MVC is in the app.js file and Routes, Controllers folder

const express = require ('express')
const app = new express()
let { people } = require ('./express/data')

// Parse Form Data
app.use (express.urlencoded( {extended: false} ))
// Parse JSON Data
app.use (express.json())

// GET request to get the File Data and rendering in JSON format
app.get ('/api/people', (req, res) => {
    res.status(200).json ({success: true, data: people})
})

// Handling the JSON data from the POST request and sending back to javascript.html file to render
app.post ('/api/people', (req, res) => {
    const {name} = req.body
    if (!name) {
        return res.status(400).json ( {success:false, msg: "please provide correct data"} )
    }
    res.status(201).json ({success: true, person:name})
})      // NOTE THAT THE DATA IS NOT PERSISTENT

// Handling the Form Data
app.post ('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        res.status(200).send (`Welcum ${name}`)
    }
    res.status(404).send ('Invalid Credentials')
})

// Adding data received from the POST request into the File
app.post ('/api/people/postman', (req, res) => {
    const {name} = req.body
    if (!name) {
        return res.status(401).json( {success: false, msg: 'Please enter some data'} )
    }
    res.status(200).json( {success: true, data: [...people, name]} )    // will create a new array
})

// Updating data using PUT method
app.put ('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        res.status(404).json({ success: false, msg: `No such person with id: ${id}` })
    }
    console.log(person)
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json( {success: true, data: newPeople} )
})

// Deleting the entry using DELETE request
app.delete ('/api/people/:id', (req, res) => {
    // const {id} = req.params

    const person = people.find ((person) => person.id === Number(req.params.id))
    console.log(person)
    if (!person) {
        return res.status(404).json( {success:false, msg:`No such id ${req.params.id}`} )
    }
    const newPerson = people.filter((person) => person.id !== Number(req.params.id))
        return res
        .status(200)
        .json ({success:true, data: newPerson})
})

app.listen (5000, () => {
    console.log ('Server up...')
})