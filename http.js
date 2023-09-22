// First Website and hosting the Server using HTTP

const http = require ('http')
const server = http.createServer ((req, res) => {
    const url = req.url
    if (url === '/') {
        // res.writeHead ()
        // res.write()
        res.end ("Hello World")
    }
    if (url === '/about') {
        // res.writeHead ()
        // res.write()
        res.end ("About Section")
    }
    else {
        res.writeHead (404, { 'content-type': 'text/html' })
        res.write('<h2>ERROR! go back to <a href="/">Home</a></h2>')
        res.end()
    }
})
server.listen (5000, (err, res) => {
    if (err) {
        console.log ("LOL error")
    }
    else {
        console.log ("Server started! listening to port 5000...")
    }
})

/*******************************************************************************************/

// Creating server using EventEmitter:

const http = require ('http')

// Event Emitter API
const server = http.createServer()

server.on ('request', (req, res) => {       // Everytime someone visits the site, this event will get invoked
    res.writeHead ( 200, {'content-type': 'text/html'} )
    res.write ('<h2>Welcome to the website</h2>')
    res.end ()                              // This MUST be explicitly called every time
})

server.listen (5000)