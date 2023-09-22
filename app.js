const express = require ('express')
const app = new express()
const people = require ('./routes/public')      // Importing Other Routers
const auth = require ('./routes/auth')          // Importing Login Auth Router

// Parse Form Data
app.use (express.urlencoded( {extended: false} ))
// Parse JSON Data
app.use (express.json())

/* We can either use the people file directly in the app.use, OR set up a recurring URL route (BASE PATH),
in this way only the one with this URL as prefix will get included */
app.use ('/api/people', people)
app.use ('/login', auth)                        // Using Auth route


app.listen (5000, () => {
    console.log ('Server up...')
})