//* -----------------------------------------------------------------------
//*                           Ticket Slice
//* -----------------------------------------------------------------------
//								Imports
// ------------------------------------------------------------------------
// @libaries
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// ------------------------------------------------------------------------
// @services
import ticketService from './ticketService'
//* -----------------------------------------------------------------------
//								    Body
// ------------------------------------------------------------------------
// @initial state
// ------------------------------------------------------------------------
const initialState = {
	tickets: [],
	ticket: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

// ------------------------------------------------------------------------
// @desc create new ticket
// ------------------------------------------------------------------------
export const createTicket = createAsyncThunk(
	'tickets/create',
	async (ticketData, thunkAPI) => {
		try {
			// get token
			const token = thunkAPI.getState().auth.user.token
			// create ticket
			return await ticketService.createTicket(ticketData, token)
		} catch (error) {
			const message =
				(error.response && error.response.data && error.response.data.message) ||
				error.message ||
				error.toString()

			return thunkAPI.rejectWithValue(message)
		}
	}
)

// ------------------------------------------------------------------------
// @desc get user tickets
// ------------------------------------------------------------------------
export const getTickets = createAsyncThunk('tickets/getAll', async (_, thunkAPI) => {
	try {
		// get token
		const token = thunkAPI.getState().auth.user.token
		// get tickets
		return await ticketService.getTickets(token)
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString()

		return thunkAPI.rejectWithValue(message)
	}
})

// ------------------------------------------------------------------------
// @desc get user ticket
// ------------------------------------------------------------------------
export const getTicket = createAsyncThunk('tickets/get', async (ticketId, thunkAPI) => {
	try {
		// get token
		const token = thunkAPI.getState().auth.user.token
		// get ticket
		return await ticketService.getTicket(ticketId, token)
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString()

		return thunkAPI.rejectWithValue(message)
	}
})

// ------------------------------------------------------------------------
// @desc close user ticket
// ------------------------------------------------------------------------
export const closeTicket = createAsyncThunk(
	'tickets/close',
	async (ticketId, thunkAPI) => {
		try {
			// get token
			const token = thunkAPI.getState().auth.user.token
			// get ticket
			return await ticketService.closeTicket(ticketId, token)
		} catch (error) {
			const message =
				(error.response && error.response.data && error.response.data.message) ||
				error.message ||
				error.toString()

			return thunkAPI.rejectWithValue(message)
		}
	}
)

// ------------------------------------------------------------------------
// @ticket slilce
export const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createTicket.pending, (state) => {
				state.isLoading = true
			})
			.addCase(createTicket.fulfilled, (state) => {
				state.isLoading = false
				state.isSuccess = true
			})
			.addCase(createTicket.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getTickets.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getTickets.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.tickets = action.payload
			})
			.addCase(getTickets.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getTicket.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getTicket.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.ticket = action.payload
			})
			.addCase(getTicket.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(closeTicket.fulfilled, (state, action) => {
				state.isLoading = false
				state.tickets.map((ticket) =>
					ticket._id === action.payload._id
						? (ticket.status = 'closed')
						: ticket
				)
			})
	},
})

//* -----------------------------------------------------------------------
//								Exports
// ------------------------------------------------------------------------

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer

//* -----------------------------------------------------------------------
