const express = require('express');
const router = express.Router();

// Controller functions
const { loginUser, signupUser, getUserProfile,getUsers } = require('../controllers/userController');

// Signup route
router.post('/signup', signupUser);

// Login route
router.post('/login', loginUser);

// Get user profile route
router.get('/profile/:id', getUserProfile);
router.get('/', getUsers);

module.exports = router;
