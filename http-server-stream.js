const fs = require('fs')
const http = require ('http')

http
    .createServer (function (req, response) {
        
        // Reading the big file in one go:
        // const text = fs.readFileSync ('./content/big.txt', 'utf-8')
        // console.log ('request generated')
        // response.end (text)

        // Reading the big file in chunks/streams
        const fileStream = fs.createReadStream ('./content/big.txt', 'utf-8')
        fileStream.on ('open', () => {
            fileStream.pipe(response)           // pipe method is pushing readStream into writeStream
        })
        fileStream.on ('error', (err) => {
            response.end (err)
        })
    })
    .listen (5000)