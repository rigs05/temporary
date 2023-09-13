// First Website and hosting the Server using HTTP

const http = require ('http')
const server = http.createServer ((req, res) => {
    if (req.url === '/') {
        res.end ("Hello World")
    }
    if (req.url === '/about') {
        res.end ("About Section")
    }
    res.end (`
        <h2>ERROR! go back to <a href="/">Home</a></h2>
    `)
})
server.listen (5000, (err, res) => {
    if (err) {
        console.log ("LOL error")
    }
    else {
        console.log ("Server started! listening to port 5000...")
    }
})