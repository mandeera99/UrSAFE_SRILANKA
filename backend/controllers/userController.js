const User = require('../models/userModels')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

   
    // Check user type and send appropriate response
    console.log(user)
    console.log(user.userType)

    if (user.userType === 'Administrator') {
      res.json({ email, token, userType: 'Administrator' });
    } else if (user.userType === 'Pharmacy') {
      res.json({ email, token, pharmacyName:user.pharmacyName, userType: 'Pharmacy', });
    } else if (user.userType === 'Customer') {
      res.json({ email, token, userType: 'Customer' });
    } else {
      res.status(400).json({ error: 'User type not found' });
    }
    
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// signup a user
const signupUser = async (req, res) => {
  const { email,password,userType,name,address,phoneNumber,pharmacyName,zipCode,state,city } = req.body

  try {
    const user = await User.signup(email,password,userType,name,address,phoneNumber,pharmacyName,zipCode,state,city)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
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

//     // Find the user by ID in the database
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Return the user details
//     res.json(user);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

module.exports = { signupUser, loginUser }