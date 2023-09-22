// const app = require ('express')()
const express = require ('express')
const app = express()

/*
app.get                 // used for GET requests (default option)
app.post                // used for POST requests
app.all                 // used for ALL irrespective of the method
app.put                 // 
app.use                 //
app.delete              // used for DELETE rquests
app.listen              // used for Listening the ports for requests
*/

app.get ('/', (req, res) => {
    // res.send ("Home Page")
    res.status(200).send ("HomePage with explicit status code")
})

app.get ('/about', (req, res) => {
    // res.send ("Home Page")
    res.status(200).send ('<h2>About Page</h2>')
})

app.all ('*', (req, res) => {
    res.status(404).send ('<h1>Resource NOT found</h1>')
})

app.listen (5000, () => {
    console.log ("server connected on port 5000")
})