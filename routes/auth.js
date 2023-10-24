const express = require('express');
const router = express.Router()         // Invoking particular property from the express module

// Handling the Form Data
router.post ('/', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send (`Welcome ${name}`)
    }
    res.status(404).send ('Invalid Credentials')
})

module.exports = router