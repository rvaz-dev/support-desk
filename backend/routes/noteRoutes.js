//* -----------------------------------------------------------------------
//*                          <-- User Routes -->
//* -----------------------------------------------------------------------
// Imports
// -----------------------------------------------------------------------
// @server
// -----------------------------------------------------------------------
const express = require('express')
const router = express.Router({ mergeParams: true })
// -----------------------------------------------------------------------
// @controller
// -----------------------------------------------------------------------
const { getNotes, addNote } = require('../controllers/noteController')
// -----------------------------------------------------------------------
// @middleware
// -----------------------------------------------------------------------
const { protect } = require('../middleware/authMiddleware')
//* -----------------------------------------------------------------------

// @desc    Get Tickets | Create Tickets | getTicket
// @route   /api/tickets
// @access  Public
// -----------------------------------------------------------------------
router.route('/').get(protect, getNotes).post(protect, addNote)

//* ----------------------------------------------------------------------
// Export
// -----------------------------------------------------------------------

module.exports = router

//* ----------------------------------------------------------------------
