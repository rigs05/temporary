const express = require ('express')
const app = new express
const { products, people } = require ('./express/data')

/*
// Basic API:
app.get ('/', (req, res) => {
    res.json ([{name: 'sunny'}, {name: 'abhi'}])
})
*/

// Calling data from file and sending it as a response (another API):
app.get ('/', (req, res) => {
    res.json ({ products, people })
})

app.listen (5000, () => {
    console.log ('server listening to port 5000..')
})