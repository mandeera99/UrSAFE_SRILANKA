const User = require('../models/userModels')
//const Storemed = require('../models/storemedModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    if (!(email && password)) {
      return res.status(400).send("All inputs are required");
    }

    // create a token
    const token = createToken(user._id);

    // Check user type and send appropriate response
    let userType;
    if (user.userType === 'Administrator') {
      userType = 'Administrator';
    } else if (user.userType === 'Pharmacy') {
      res.json({ email, token, pharmacyName:user.pharmacyName, userType: 'Pharmacy', id: user._id });
      userType = 'Pharmacy';
    } else if (user.userType === 'Customer') {
      userType = 'Customer';
    } else {
      return res.status(400).json({ error: 'Wrong Credentials' });
    }

    res.json({ email, token, userType, id: user._id });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const signupUser = async (req, res) => {
  const { email, password, userType, name, address, phoneNumber, pharmacyName, zipCode, state, city } = req.body;

  try {
    const user = await User.signup(email, password, userType, name, address, phoneNumber, pharmacyName, zipCode, state, city);

    // create a token
    const token = createToken(user._id);

    // Check user type and send appropriate response
    console.log(user);
    console.log(userType);

    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


// // Function to get user details
// const getUserDetails = async (req, res) => {
//   try {
//     // Get the user ID from the request object (assuming it was set by middleware)
//     const userId = req.userId;
//     if (!userId) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }
// Function to get user details
const getUserDetails = async (req, res) => {
  try {
    // Get the user ID from the request object (assuming it was set by middleware)
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Find the user by ID in the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user details
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select("-password");
    return res.json(users);
  } catch (err) {
    next(err);
  }
};

const getUserProfile = async (req, res, next) => {
  try {
      const user = await User.findById(req.params.id).orFail();
      return res.send(user);
  } catch(err) {
      next(err)
  }
}
module.exports = { signupUser, loginUser, getUserDetails, getUserProfile, getUsers }