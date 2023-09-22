const express = require ('express')
const app = new express()
const { products } = require ('./express/data')

app.get ('/', (req, res) => {
    res.send ('<h2>HomePage</h2><h4><a href="/api/products">PRODUCTS</a></h4>')
})

// Responding with only limited data as requirements
app.get ('/api/products', (req, res) => {                  // define the route
    const newProducts = products.map ((product) => {        // product is an instance of a collection in products object
        const {id, name, image} = product                   // segregate the required info in a new object (OBJECT NAMES MUST MATCH WITH DATASET)
        return {id, name, image}                            // return the object
    })
    res.json (newProducts)                                  // responding the object as json
})

// Fetching details of collection with id = 1
app.get ('/api/products/1', (req, res) => {
    const singleProduct = products.find ((product) => product.id === 1)
    res.json (singleProduct)
})

// Fetching details of colletion as per route parameters so we don't have to hardcode the number each time
app.get ('/api/products/:prodID', (req, res) => {
    console.log (req.params)
    const { prodID } = req.params                       // we put curly braces because there can be multiple paramters within a single URL
    const singleProduct = products.find ((product) => product.id === Number (prodID))   // converting 'string' to 'number'
    if (!singleProduct) {                               // return custom error if the parameters don't match the API data
        return res.status(404).send ("Page Not Found")
    }

    res.json (singleProduct)
})

// Handling the URL Parameters OR Query Parameters
app.get ('/api/v1/query', (req, res) => {
    const { search, limit } = req.query             // req.query checks the query if any
    let sortedProducts = [...products]              // Returning the data instance using SPREAD OPERATOR (...)


    if (search) {                   // to search names having spaces, use '%20' in its place and it'll render automatically by the browser
        console.log (req.query)
        // const decodedSearch = decodeURIComponent (search)
        sortedProducts = sortedProducts.filter ((product) => {
            return product.name.startsWith (search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice (0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json ( {success: true, data: []} )       // we put return here as JS cannot send 2 requests (viz. this and the main one below) in the same request
    }
    // console.log (sortedProducts)
    res.status(200).json (sortedProducts)
})




app.listen  (5000, (req, res) => {
    console.log ('connection jud gaya...')
})
