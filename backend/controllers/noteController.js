//* -----------------------------------------------------------------------
//*                          <-- User Controller -->
//* -----------------------------------------------------------------------
// Imports
// -----------------------------------------------------------------------
// @server
// -----------------------------------------------------------------------
const asyncHandler = require('express-async-handler')
// -----------------------------------------------------------------------
// @models
// -----------------------------------------------------------------------
const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')
const Note = require('../models/noteModel')

//* -----------------------------------------------------------------------

// @desc    Get notes for a Ticket
// @route   GET - /api/tickets/:ticketId/notes
// @access  Private
// -----------------------------------------------------------------------
exports.getNotes = asyncHandler(async (req, res) => {
	// Get user using the id in the JWT
	const user = await User.findById(req.user.id)
	// handle user
	if (!user) {
		res.status(401)
		throw new Error('User not found!')
	}

	// find tickets
	const ticket = await Ticket.findById(req.params.ticketId)
    
    // checks if user ticket
    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized!')
    }

    // get notes
    const notes = await Note.find({ticket: req.params.ticketId})

	//return tickets
	res.status(200).json(notes)
})

//* -----------------------------------------------------------------------

// @desc    Create ticket note
// @route   POST - /api/tickets/:ticketId/notes
// @access  Private
// -----------------------------------------------------------------------
exports.addNote = asyncHandler(async (req, res) => {
	// Get user using the id in the JWT
	const user = await User.findById(req.user.id)
	// handle user
	if (!user) {
		res.status(401)
		throw new Error('User not found!')
	}

	// find tickets
	const ticket = await Ticket.findById(req.params.ticketId)
    
    // checks if user ticket
    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized!')
    }

    // create note
    const note = await Note.create({
        text: req.body.text,
        isStaff: false,
        ticket: req.params.ticketId,
        user: req.user.id,
    })

	//return tickets
	res.status(200).json(note)
})

//* -----------------------------------------------------------------------