const express = require ('express')
const app = new express()

// Middleware function accessing the request BEFORE the GET method
const logger = require ('./express/logger')

app.use (logger)             // Logger function will be Applied to ALL the handlers
// app.use ('/api', logger)        // This will make all the routes starting with '/api' to have the middleware functionality

app.get ('/', (req, res) => {
    // Accessing request data - directly inside request handlers, explicit function, function in new file then include to main file
    /* const method = req.method
    const url = req.url
    const time = new Date().toISOString */
    res.send ('<h3>Homepage</h3><a href="/about">About</a>')
})
app.get ('/about', (req, res) => {
    res.send ('<h3>About Section</h3><a href="/">Home</a>')
})



app.listen (5000, () => {
    console.log ('sun raha hai na tu...')
})