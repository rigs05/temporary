const express = require('express');
const router = express.Router()         // Invoking particular property from the express module
const {
    getPeople,
    createPeople,
    addPeople,
    updatePeople,
    deletePeople,
} = require ('../controllers/people');

// router.get ('/', getPeople)
// router.post ('/', createPeople)
// router.post ('/postman', addPeople)
// router.put ('/:id', updatePeople)
// router.delete ('/:id', deletePeople)

// ROUTER CHAINING
router.route ('/').get(getPeople).post(createPeople);
router.route ('/:id').put(updatePeople).delete(deletePeople);
router.route ('/postman').post(addPeople);


module.exports = router