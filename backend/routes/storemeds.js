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
router.get('/:userId', getStoremeds)

//GET a search medicine
router.post('/getStoremed/:userId', getStoremed)

//POST a new medicine
router.post('/', createStoremed)

//DELETE a medicine
router.delete('/:id', deleteStoremed)

//UPDATE a medicine
router.put('/:id', updateStoremed)

module.exports = router