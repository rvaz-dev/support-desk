//* -----------------------------------------------------------------------
//*                             TICKET MODEL
//* -----------------------------------------------------------------------
// Imports
// -----------------------------------------------------------------------
const mongoose = require('mongoose')
//* -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// Model
// -----------------------------------------------------------------------

const ticketSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
		},
		product: {
			type: String,
			required: [true, 'Please select a product'],
			enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad']
		},
		description: {
			type: String,
			required: [true, 'Please enter a description of the issue'],
		},
		status: {
			type: String,
            required: true,
            enum: ['new', 'open', 'closed'],
			default: 'new',
		},
	},
	{
		timestamps: true,
	}
)

// -----------------------------------------------------------------------
// Export
// -----------------------------------------------------------------------
module.exports = mongoose.model('Ticket', ticketSchema)
// -----------------------------------------------------------------------