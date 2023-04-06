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
    console.log(user.email)
    console.log(user.type)

    if (user.type === 'admin') {
      res.json({ email, token, userType: 'admin' });
    } else if (user.type === 'pharmaciest') {
      res.json({ email, token, userType: 'pharmaciest' });
    } else if (user.type === 'regular') {
      res.json({ email, token, userType: 'regular' });
    } else {
      res.status(400).json({ error: 'User type not found' });
    }
    
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// signup a user
const signupUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.signup(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { signupUser, loginUser }