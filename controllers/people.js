/* Controllers folder is used to further divide the routes' functions in a separate files and 
   invoking the functions defined here into the routers */

let { people } = require ('../express/data')    // Importing the API

// GET request to get the File Data and rendering in JSON format
const getPeople = ((req, res) => {
    res.status(200).json ({success: true, data: people})
})

// Handling the JSON data from the POST request and sending back to javascript.html file to render
const createPeople = ((req, res) => {
    const {name} = req.body
    if (!name) {
        return res.status(400).json ( {success:false, msg: "please provide correct data"} )
    }
    res.status(201).json ({success: true, person:name})
})      // NOTE THAT THE DATA IS NOT PERSISTENT

// Adding data received from the POST request into the File
const addPeople = ((req, res) => {
    const {name} = req.body
    if (!name) {
        return res.status(401).json( {success: false, msg: 'Please enter some data'} )
    }
    res.status(200).json( {success: true, data: [...people, name]} )    // will create a new array
})

// Updating the names with the ones given in req.body using PUT method
const updatePeople = ((req, res) => {
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

// Deleting the entry using DELETE method
const deletePeople = ((req, res) => {
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

module.exports = {
    getPeople,
    createPeople,
    addPeople,
    updatePeople,
    deletePeople,
}