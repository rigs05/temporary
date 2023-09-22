const express = require ('express')
const app = new express
const path = require ('path')       // used to provide absolute path

app.use (express.static ('../public'))

/* // THis portion can be skipped as index.html is also a static resource here, hence it can be
   // copied in public folder as well and then express static middleware will call it as well

app.get ('/', (req, res) => {
    res.sendFile (path.resolve (__dirname, './navbar-app/index.html'))  // we can also use (path.join())
})

*/

app.all ('*', (req, res) => {
    res.status(404).send (`<h2>Page not found</h2>`)
})

app.listen (5000, () => {
    console.log ('Server is listening to port 5000...')
})