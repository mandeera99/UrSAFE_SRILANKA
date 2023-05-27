const User = require('../models/userModels')
const mongoose = require('mongoose')

const UpdateUser = async (req, res) => {
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
//get user details
const getUser =  async (req, res) => {
    const {userId} = req.params;
  try {
    const user = await User.findOne({ _id:userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};




module.exports = {
    UpdateUser,
    getUser
}