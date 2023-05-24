const User = require('../models/userModels');

exports.getUserCount = async (req, res) => {
  try {
    const userCount = await User.find().count();
    res.send({ status: "ok", data: userCount });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Error retrieving user count" });
  }
};