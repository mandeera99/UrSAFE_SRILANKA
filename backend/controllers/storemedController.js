const Storemed = require('../models/storemedModel')
const mongoose = require('mongoose')

//get all medicine
const getStoremeds = async (req, res) => {
    const storemeds = await Storemed.find({}).sort({ lot_no: 1 })

    res.status(200).json(storemeds)
}

//search medicine
const getStoremed = async (req, res) => {

    const {medicine_name} = req.body
    try {
        const storemeds = await Storemed.find({ medicine_name }).exec();
        console.log(storemeds)
        if (!storemeds) {
            return res.status(204).send({ error: 'Medicine not found ' });
        }
        res.status(200).json(storemeds);

    } catch (error) {
        res.status(500).send({ error: error });
    }
}

//create new medicine
const createStoremed = async (req, res) => {
    const { lot_no, medicine_name, brand, quantity, expiry_date, supplier_name, price } = req.body

    //add doc to db
    try {
        const storemed = await Storemed.create({ lot_no, medicine_name, brand, quantity, expiry_date, supplier_name, price })
        res.status(200).json(storemed)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
    // res.json({mssg: 'POST a new medicine'})
}


//delete a medicine
const deleteStoremed = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such medicine' })
    }

    const storemed = await Storemed.findOneAndDelete({ _id: id })

    if (!storemed) {
        return res.status(404).json({ error: 'No such medicine' })
    }
    res.status(200).json(storemed)
}


//update a medicine

const updateStoremed = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such medicine' })
    }

    const storemed = await Storemed.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!storemed) {
        return res.status(404).json({ error: 'No such medicine' })
    }

    res.status(200).json(storemed)
}

module.exports = {
    getStoremeds,
    getStoremed,
    createStoremed,
    deleteStoremed,
    updateStoremed
}