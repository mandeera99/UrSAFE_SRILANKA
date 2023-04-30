const express = require('express');
const {
    createStoremed,
    getStoremeds,
    getStoremed,
    deleteStoremed,
    updateStoremed
} = require('../controllers/storemedController')

const router = express.Router();

//GET all medicines
router.get('/', getStoremeds)

//GET a single medicine
router.post('/getStoremed', getStoremed)

//POST a new medicine
router.post('/', createStoremed)

//DELETE a medicine
router.delete('/:id', deleteStoremed)

//UPDATE a medicine
router.put('/:id', updateStoremed)

module.exports = router