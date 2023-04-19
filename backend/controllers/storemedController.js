const Storemed = require('../models/storemedModel')
const mongoose = require('mongoose')

//get all medicine
const getStoremeds = async (req,res) => {
    const storemeds = await Storemed.find({}).sort({ lot_no: 1 })

    res.status(200).json(storemeds)
}


//get a single medicine
const getStoremed = async (req,res) => {

    // if(!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: 'No such medicine'})
    // }
try{
    const query = req.params.query;
    const storemeds = await Storemed.find({
        $or: [
            { medicine_name: {$regex: query, $options: 'i'}},
            { lot_no: {$regex: query, $options: 'i'}}
        ]
    });

    // if(!storemed){
    //     return res.status(404).json({error: 'No such medicine'})
    // }

    // res.status(200).json(storemed)
    res.json(storemeds);
}catch(err){
    console.error(err);
    res.status(500).json({ error: 'Server error' });
}
}

//create new medicine
const createStoremed = async(req,res) =>{
    const{lot_no, medicine_name, brand, quantity, expiry_date, supplier_name} = req.body

    //add doc to db
    try{
        const storemed = await Storemed.create({lot_no, medicine_name, brand, quantity, expiry_date, supplier_name})
        res.status(200).json(storemed)
    }catch(error){
        res.status(400).json({error: error.message})

    }
    // res.json({mssg: 'POST a new medicine'})
}


//delete a medicine
const deleteStoremed = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such medicine'})
    }

    const storemed = await Storemed.findOneAndDelete({_id: id})

    if(!storemed){
        return res.status(404).json({error: 'No such medicine'})
    }
    res.status(200).json(storemed)
}


//update a medicine

const updateStoremed = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such medicine'})
    } 

    const storemed = await Storemed.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!storemed){
        return res.status(404).json({error: 'No such medicine'})
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