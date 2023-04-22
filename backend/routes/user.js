const express =require('express')
const router=express.Router();



// controller functions
const { loginUser, signupUser } = require('../controllers/userController')

// signup route
router.post('/signup', signupUser)

// login route
router.post('/login', loginUser)

// // Get user details route
// router.get('/me', getUserDetails);

module.exports = router