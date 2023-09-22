const { createReadStream } = require ('fs')

// Reading the data in file in streams rather as a whole
const stream = createReadStream ('./content/big.txt', {
    highWaterMark: 102400,              // Stream buffer size to be 100kb rather than default 64kb
    encoding: 'utf-8',                  // encoding the buffer in utf-8 to make it readable
})       

stream.on ('data', (result) => {
    console.log (result)
})

stream.on ('error', (err) => console.log (err)) // Error event is invoked when the file_path doesn't match

// Events in the ReadStream : data, close, open, ready, bytesRead
// highWaterMark = argument after the file-name used to control the buffer size