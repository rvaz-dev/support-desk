//* -----------------------------------------------------------------------
//*                          <-- User Routes -->
//* -----------------------------------------------------------------------
// Imports
// -----------------------------------------------------------------------
// @server
// -----------------------------------------------------------------------
const express = require('express')
const router = express.Router()
// -----------------------------------------------------------------------
// @controller
// -----------------------------------------------------------------------
const {
	getTickets,
	getTicket,
	createTicket,
	deleteTicket,
	updateTicket,
} = require('../controllers/ticketController')
// -----------------------------------------------------------------------
// @re-route into note router
const noteRouter = require('./noteRoutes')
router.use('/:ticketId/notes', noteRouter)

// -----------------------------------------------------------------------
// @middleware
// -----------------------------------------------------------------------
const { protect } = require('../middleware/authMiddleware')
//* -----------------------------------------------------------------------

// @desc    Get Tickets | Create Tickets | getTicket
// @route   /api/tickets
// @access  Public
// -----------------------------------------------------------------------
router.route('/').get(protect, getTickets).post(protect, createTicket)
router
	.route('/:id')
	.get(protect, getTicket)
	.delete(protect, deleteTicket)
	.put(protect, updateTicket)

//* ----------------------------------------------------------------------
// Export
// -----------------------------------------------------------------------

module.exports = router

//* ----------------------------------------------------------------------
