//* -----------------------------------------------------------------------
//*                          <-- User Routes -->
//* -----------------------------------------------------------------------
// Imports
const express = require('express')
const router = express.Router()

const { registerUser, loginUser, getMe } = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')
//* -----------------------------------------------------------------------

// @desc    Register a new user
// @route   /api/users
// @access  Public
// -----------------------------------------------------------------------
router.post('/', registerUser)

//* -----------------------------------------------------------------------

// @desc    Login a new user
// @route   /api/users/login
// @access  Public
// -----------------------------------------------------------------------
router.post('/login', loginUser)

//* -----------------------------------------------------------------------

// @desc    Get current User
// @route   /api/users/me
// @access  Private
// -----------------------------------------------------------------------
router.get('/me', protect, getMe)





module.exports = router