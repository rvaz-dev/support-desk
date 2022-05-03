//* -----------------------------------------------------------------------
//*                           	Ticket Service
//* -----------------------------------------------------------------------
//								Imports
// ------------------------------------------------------------------------
// @libaries
import axios from 'axios'

//* -----------------------------------------------------------------------
//								    Body
// ------------------------------------------------------------------------
// @API
// -----------------------------------------------------------------------
const API_URL = '/api/tickets/'

// ------------------------------------------------------------------------
// @desc get user ticket
// ----------------------------------------------------------------------
const getNotes = async (ticketId, token) => {
	// configs auth token
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	// response
	const response = await axios.get(API_URL + ticketId + '/notes', config)
	return response.data
}

// ------------------------------------------------------------------------
// @desc create ticket note
// ----------------------------------------------------------------------
const createNote = async (noteText, ticketId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.post(
		API_URL + ticketId + '/notes',
		{
			text: noteText,
		},
		config
	)

	// response
	return response.data
}

//* -----------------------------------------------------------------------
//								Export
// ------------------------------------------------------------------------
const noteService = {
	getNotes,
	createNote,
}
export default noteService

//* -----------------------------------------------------------------------
