// const Storemed = require('../models/storemedModel')
const User = require('../models/userModels')
const mongoose = require('mongoose')

const updateUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such User' })
    }

    const user = await User.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!user) {
        return res.status(404).json({ error: 'No such User' })
    }

    res.status(200).json(user)
}

module.exports = {
    updateUser
}