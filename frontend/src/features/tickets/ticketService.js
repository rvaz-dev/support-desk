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
// @desc create new ticket
// ----------------------------------------------------------------------
const createTicket = async (ticketData, token) => {
    // configs auth token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    // response
    const response = await axios.post(API_URL, ticketData, config)
    return response.data
}

// ------------------------------------------------------------------------
// @desc get user tickets
// ----------------------------------------------------------------------
const getTickets = async (token) => {
    // configs auth token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    // response
    const response = await axios.get(API_URL, config)
    return response.data
}

// ------------------------------------------------------------------------
// @desc get user ticket
// ----------------------------------------------------------------------
const getTicket = async (ticketId, token) => {
    // configs auth token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    // response
    const response = await axios.get(API_URL + ticketId, config)
    return response.data
}

// ------------------------------------------------------------------------
// @close get user ticket
// ----------------------------------------------------------------------
const closeTicket = async (ticketId, token) => {
    // configs auth token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    // response
    const response = await axios.put(API_URL + ticketId, {status: 'closed'}, config)
    return response.data
}


//* -----------------------------------------------------------------------
//								Export
// ------------------------------------------------------------------------
const ticketService = {
    createTicket,
    getTickets,
    getTicket,
    closeTicket,
}
export default ticketService

//* -----------------------------------------------------------------------
