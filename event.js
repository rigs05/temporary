const EventEmitter = require ('events')
const custom = new EventEmitter()

custom.on ('response', (name, id) => {
    console.log (`Data received with NAME: ${name} and ID: ${id}.`)
})

custom.on ('response', () => {
    console.log ('some other events')
})

custom.emit ('response', 'Rigs', 69)


/* Many modules have EventEmitter class extended by default, hence we can access the methods
right from the module functions, properties etc */

