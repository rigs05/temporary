// Defining the Middleware in a separate file and including it later

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().toString()
    console.log (method, url, time)
    next()
}

module.exports = logger